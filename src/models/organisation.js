module.exports = (sequelize, Sequelize) => {
    const Organisation = sequelize.define("organisation", {
      organisationId: {
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
      },
      rollNo:{
        type:Sequelize.INTEGER
      }
    });
  
    return Organisation;
  };