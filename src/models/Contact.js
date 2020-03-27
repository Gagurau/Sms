module.exports = (sequelize,Sequelize)=>{
    const Contact = sequelize.define("Contact",{
    id:{
        type:Sequelize.INTEGER,
        autoincrement:true,
        primaryKey:true        
    },
    idSrc:{
        foreignKey:true,
        type:Sequelize.INTEGER
    },
    idDst:{
        foreignKey:true,
        type:Sequelize.INTEGER
    }
},{
    freezeTableName:true,
    tablename: "HistoryPassword",
    timestamps: false})
    return Contact
}