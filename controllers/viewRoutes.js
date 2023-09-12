const router = require('express').Router();
const { User, Resume, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// signup route
router.get('/signup', (req, res) => {
  try{
    if (req.session.loggedIn) {
      res.redirect('/')
      return
    }

    res.render('signup')
  } catch(err) {
    res.status(500).json(err)
  }
})

// profile route
router.get('/profile', async (req, res) => {
  const user_id = req.session.user_id

  if(!user_id) {
    res.redirect('/login')
  }

  try {
    const user = await User.findByPk(user_id, {
      raw: true
    })

    const resumes = await Resume.findAll({
      where: {
        user_id
      },
      raw: true
    })

    const comments = await Comment.findAll({
      where: {
        user_id
      },
      raw: true
    })
    res.render('profile', {...user, resumes, comments, logged_in: req.session.logged_in})

  } catch(err) {
    res.status(500).json(err)
  }
})

router.get('/profile/:id', async (req, res) => {
  try{
      const resume = await Resume.findByPk(req.params.id, {
          include: [{
              model: Comment,
              include: {
                  model: User,
                  attributes: ['username']
              }
          },
          {
              model: User,
              attributes: ['username']
          }]
      })
      const editResume = resume.get({
          raw: true
      })
      res.render('edit-delete', {
          editResume
      })
  } catch(err) {
      res.status(500).json(err)
  }
})


module.exports = router;
