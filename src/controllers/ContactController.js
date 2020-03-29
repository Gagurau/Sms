const db = require ('../config/db.config')
const Contact = db.contact

module.exports = controller =>{
    create = async function (req, res) {
        try{
            const contact = await Contact.create(req.body)
            res.status(201).send(contact)
        }catch(err){
            res.status(400).send(err)    
        }
    },
    del = async function (req, res){
        try{
            const contact = await Contact.findOne({where: {id:req.params.id}})
            if (contact){
                await contact.destroy()
                res.status(200).send("Contato deletado")
            }else{
                res.status(404).send("Contato não encontrado")
            }
        }catch(err){
            res.status(500).send(err)
        }
    }   
}