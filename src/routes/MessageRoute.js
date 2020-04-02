const express = require('express')
const router = express.Router()
const message = require("../controllers/MessageController")

router.get("/", function(req,res){res.send("message")})

router.get("/:id", message.findByPk)

router.post("/create", message.create)

router.get("/idSrc/:idSrc", message.findBySrc)

router.get("/idDst/:idDst", message.findByDst)

router.put("/deletetalk/:idSrc/:idDst", message.deleteTalk)

router.put("/deletealltalks/:id", message.deleteAllTalks)

module.exports = router