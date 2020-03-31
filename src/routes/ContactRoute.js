const express = require('express') 
const router = express.Router()
const contact = require ('../controllers/ContactController')

router.get ('/', (req,res)=>{
    res.send("funciona")
})
router.get ('/:id', contact.findByPk)

router.post('/create', contact.create)

router.delete('/delete/:id', contact.del)

router.put('/update/:id', contact.update)

module.exports = router