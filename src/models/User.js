module.exports = (sequelize,Sequelize)=>{
    const User = sequelize.define("User",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:Sequelize.STRING(200)
        },
        username:{
            type:Sequelize.STRING(200),
            unique:true
        },
        email:{
            type:Sequelize.STRING(200)
        },
        password:{
            type:Sequelize.STRING(200)
        },
        active:{
            type:Sequelize.INTEGER
        }
    },{
        freezeTableName:true,
        tablename: "User",
        timestamps: false})
        return User}