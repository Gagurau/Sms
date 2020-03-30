module.exports = (sequelize,Sequelize) =>{
    const Story = sequelize.define("Story",{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        message:{
            type:Sequelize.STRING(200)
        },
        idUser:{
            type:Sequelize.INTEGER,
            foreignKey:true
        },
        postDate:{
            type: Sequelize.DATE
        },
        type:{
        type:Sequelize.INTEGER
    }},{
    freezeTableName:true,
    tablename: "Story",
    timestamps: false})
    return Story
}