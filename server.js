const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./src/config/db.config')
db.sequelize.sync().then(()=>{})
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

module.exports=app