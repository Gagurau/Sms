const express = require ('express')
const router = express.Router()
const user = require('../controllers/UserController')


router.get ('/', (req,res) =>{
    res.send("user")
})
router.post('/create', user.create)

router.get('/:id', user.findByPk)

router.put('/update/:id',user.update)

router.put('/delete/:id', user.update)

router.get('/all', user.findAll)

module.exports = router