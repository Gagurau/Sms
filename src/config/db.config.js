const {env} = process

const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    env.DB_DATABASE, env.DB_USERNAME, env.DB_PASSWORD, {
	host: env.DB_HOST,
	port: env.DB_PORT,
	dialect: env.DB_DIALECT,
	operatorsAliases: false,
	timezone: "-03:00"
})
const db = {}

db.sequelize=sequelize
db.Sequelize=Sequelize

db.contact = require ('../models/Contact')(sequelize,Sequelize)
db.historyPassword = require ('../models/HistoryPassword')(sequelize,Sequelize)
db.message = require ('../models/Message')(sequelize,Sequelize)
db.profile = require ('../models/Profile')(sequelize,Sequelize)
db.story = require ('../models/Story')(sequelize,Sequelize)
db.user = require ('../models/User')(sequelize,Sequelize)

db.user.hasOne(db.contact,{foreignKey: "idSrc"});
db.contact.belongsTo(db.user,{foreignKey: "idSrc"});
db.user.hasOne(db.contact,{foreignKey: "idDst"});
db.contact.belongsTo(db.user,{foreignKey: "idDst"});

db.user.hasMany(db.historyPassword,{foreignKey:"idUser"})
db.historyPassword.belongsTo(db.user,{foreignKey:"idUser"})

db.user.hasMany(db.message,{foreignKey:"idSrc"})
db.message.belongsTo(db.user,{foreignKey:"idSrc"})
db.user.hasMany(db.message,{foreignKey:"idDst"})
db.message.belongsTo(db.user,{foreignKey:"idDst"})

db.user.hasOne(db.profile,{foreignKey:"idUser"})
db.profile.belongsTo(db.user,{foreignKey:"idUser"})

db.user.hasOne(db.story,{foreignKey:"idUser"})
db.story.belongsTo(db.user,{foreignKey:"idUser"})

module.exports = db