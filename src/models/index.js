const Sequelize = require("sequelize");
const sequelize = new Sequelize('saas', 'postgres', '020300', {
  host: 'localhost',
  dialect: 'postgres'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.organisation = require("./organisation")(sequelize, Sequelize);
db.application = require("./application")(sequelize, Sequelize);
db.member=require('./member')(sequelize,Sequelize)
db.organisation.hasMany(db.application);
db.application.belongsTo(db.organisation);

db.application.hasMany(db.member)
db.member.belongsTo(db.application)



module.exports = db;