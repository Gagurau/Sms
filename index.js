const http = require('http')
const dotenv = require('dotenv-safe').config()

const app = require ('./server')

const port = process.env.PORT || 5000
const server = http.createServer(app)

server.on("error", err =>{
    console.log(err.message)
})

server.listen(port, () =>{
    console.log("porta " + port)
})