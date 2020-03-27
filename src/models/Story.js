module.exports = (sequelize,Sequelize) =>{
    const Story = sequelize.define("Story",{
        id:{
            type:Sequelize.INTEGER,
            autoincrement:true,
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
    tablename: "HistoryPassword",
    timestamps: false})
    return Story
}