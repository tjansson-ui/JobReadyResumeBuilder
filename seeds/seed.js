const sequelize = require('../config/connection');
const { User, Resume, Comment } = require('../models');

const userData = require('./userData.json');
const resumeData = require('./resumeSeeds.json')
const commentData = require('./commentSeeds.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const resume of resumeData) {
    await Resume.create({
      ...resume,
      user_id: users[Math.floor(Math.random() * users.length)].id
    })
  }

  const comments = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true
  })

  process.exit(0);
};

seedDatabase();
