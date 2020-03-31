module.exports = (sequelize, Sequelize)=>{
    const HistoryPassword = sequelize.define("HistoryPassword",{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        password:{
            type:Sequelize.STRING(200)
        }
    },{
        freezeTableName:true,
        tablename: "HistoryPassword",
        timestamps: false
    })
    return HistoryPassword
}