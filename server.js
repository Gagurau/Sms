const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./src/config/db.config')

// db.sequelize.sync().then(()=>{})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const user = require("./src/routes/UserRoute")
const contact = require("./src/routes/ContactRoute")
const history = require("./src/routes/HistoryPasswordRoute")
app.use("/user", user)
app.use("/contact", contact)
app.use("/history", history)
module.exports=app