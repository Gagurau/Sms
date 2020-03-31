const db = require ('../config/db.config')
const Contact = db.contact

exports.create = async function (req, res) {    
    Contact.create(req.body)
    .then(function(){
        res.status(201).send(req.body)
    }).catch(function(err){
        res.status(400).send(err)
    })
},
exports.del = async function (req, res){
    const contact = await Contact.findOne({where: {id:req.params.id}})
    console.log(contact)
    if (contact){
        contact.destroy()
        res.status(200).send("Contato deletado")}
    else{
       res.status(404).send("Contato não encontrado")
        }
},
exports.findByPk = async function(req,res){
    const contact = await Contact.findByPk(req.params.id)
    if(contact){
        console.log(req.params.id)
        res.status(200).send(contact)
    }
    else{
    res.status(404).send("Contato não encontrado")
    }
},
exports.update = async function(req,res){
    contact = await Contact.findByPk(req.params.id)
    if (contact){
    Contact.update({
        idSrc: req.body.idSrc,
        idDst: req.body.idDst
    },{where:
        {id:req.params.id}
    }).then(function(){
        res.status(200).send(req.body)
    })
    }else{
        res.status(404).send(("Contato não encontrado"))
    }
    
}
