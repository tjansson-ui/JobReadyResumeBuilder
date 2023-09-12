const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Resume extends Model {
  
}

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
        allowNull: true,
      },


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
      rolestart1: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      roleend1: {
        type: DataTypes.DATE,
        allowNull: true,
        
      },

      company2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      role2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rolestart2: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      roleend2: {
        type: DataTypes.DATE,
        allowNull: true,
        
      },

      company3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      role3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rolestart3: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      roleend3: {
        type: DataTypes.DATE,
        allowNull: true,
        
      },


      institute1: {
      type: DataTypes.STRING,
      allowNull: false,
      },
      degree1: {
      type: DataTypes.STRING,
      allowNull: false,
      },
      edstart1: {
      type: DataTypes.DATE,
      allowNull: false,
      },
      edend1: {
      type: DataTypes.DATE,
      allowNull: true,
       // if incomplete, still select an end date of last attended
    },

    institute2: {
      type: DataTypes.STRING,
      allowNull: true,
      },
      degree2: {
      type: DataTypes.STRING,
      allowNull: true,
      },
      edstart2: {
      type: DataTypes.DATE,
      allowNull: true,
      },
      edend2: {
      type: DataTypes.DATE,
      allowNull: true,
       // if incomplete, still select an end date of last attended
    },

    institute3: {
      type: DataTypes.STRING,
      allowNull: true,
      },
      degree3: {
      type: DataTypes.STRING,
      allowNull: true,
      },
      edstart3: {
      type: DataTypes.DATE,
      allowNull: true,
      },
      edend3: {
      type: DataTypes.DATE,
      allowNull: true,
       // if incomplete, still select an end date of last attended
    },
   


    skill1: {
        type: DataTypes.STRING,
        allowNull: true,
      }, // SKILLS1 -- Languages, computer langs, hard/soft skills
    skill2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    skill3: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, 
{
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'resume',
}
)


module.exports = Resume;