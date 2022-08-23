module.exports = (sequelize, Sequelize) => {
    const Application = sequelize.define("application", {
      applicationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apiKey:{
        type:Sequelize.STRING
      }
    });
  
    return Application;
  };
