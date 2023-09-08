const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Resume extends Model {
  
}

// TODO
// RESUME ATTRIBUTES
Resume.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      fname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true, -- may not be unique if we allow multiple resumes per user
        validate: {
          isEmail: true,
        },
      },
      github: {
        type: DataTypes.STRING,
        allowNull: false,
      },

// JOBCOMPANY1 string, allowNull: false
// JOBTITLE1 string, allowNull: false
// JOBDESCRIP1 long string
// JOBSTART1 date, MMM YYYY, allowNull: false
// JOBEND1 date, MMM YYYY, defaultValue present allowNull: false


      company1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rolestart: {
        type: DateTypes.DATE,
        allowNull: false,
      },
      roleend: {
        type: DateTypes.DATE,
        allowNull: false,
        defaultValue: "Present",
      },
// JOBCOMPANY2
// JOBTITLE2
// JOBDESCRIP2
// JOBSTART2
// JOBEND2

// JOBCOMPANY3
// JOBTITLE3
// JOBDESCRIP3
// JOBSTART3
// JOBEND3
      institute1: {
      type: DataTypes.STRING,
      allowNull: false,
      },
      degree1: {
      type: DataTypes.STRING,
      allowNull: false,
      },
      edstart: {
      type: DateTypes.DATE,
      allowNull: false,
      },
      edend: {
      type: DateTypes.DATE,
      allowNull: false,
      defaultValue: "Present", // if incomplete, still select an end date of last attended
    },
    // INSTITION2
    // DEGREE2
    // START2
    // END2

    // INSTITION3
    // DEGREE3
    // START3
    // END3
    skill1: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // SKILLS1 -- Languages, computer langs, hard/soft skills
    skill2: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    skill3: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, 
{
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'user',
}
)


// TODO 
// connect resumeID to the userID
module.exports = Resume;