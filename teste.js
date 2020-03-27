const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste','root','123',{
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(
    function(){
        console.log("funciona")
    }).catch(function(erro){
        console.log("fudeu" + erro)
    })
const password = require('./src/models/User')(sequelize, Sequelize)
password.sync({force:true})