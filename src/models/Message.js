module.exports = (sequelize, Sequelize)=>{
    const Message = sequelize.define("Message",{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        idSrc:{
            type:Sequelize.INTEGER,
            foreignKey:true
        },
        idDst:{
            type:Sequelize.INTEGER,
            foreignKey:true
        },
        date:{
            type:Sequelize.DATE
        },
        message:{
            type:Sequelize.STRING(200)
        },
        statusSrc:{
            type:Sequelize.INTEGER
        },
        statusDst:{
            type:Sequelize.INTEGER
        }
    },{
		freezeTableName: true,
		tablename: "Message",
		timestamps: false
	})
    return Message
}