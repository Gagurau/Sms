const express = require('express')
const router = express.Router()
const history = require ('../controllers/HistoryPasswordController')
const { historyPassword } = require('../config/db.config')

// router.get('/', (req,res)=>{res.send("history")})

router.post('/create', history.create)

router.get('/:id', history.findByPk)

module.exports = router