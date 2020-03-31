module.exports = (sequelize,Sequelize)=>{
    const Contact = sequelize.define("Contact",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true        
    },
    // idSrcs:{
    //     foreignKey:true,
    //     type:Sequelize.INTEGER
    // },
    // idDst:{
    //     foreignKey:true,
    //     type:Sequelize.INTEGER
    //}
},{
    freezeTableName:true,
    tablename: "Contact",
    timestamps: false})
    return Contact
}