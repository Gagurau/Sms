const db = require ('../config/db.config')
const Contact = db.contact

exports.create = async function (req, res) {    
    const contact = await Contact.create(req.body)
    .then(function(){
        res.status(201).send(contact)
    }).catch(function(err){
        res.status(400).send(err)
    })
},
exports.del = async function (req, res){
    const contact = await Contact.findOne({where: {id:req.params.id}})
    .then(function (){
        contact.destroy()
        res.status(200).send("Contato deletado")})
        .catch(function (erro){
            res.status(404).send("Contato não encontrado")
        })
},
exports.findByPk = async function(req,res){
    const contact = await Contact.findByPk(req.body.id)
    .then(function(){
        res.status(200).send(contact)
    })
    .catch(function(erro){
    res.status(404).send("Contato não encontrado")
})}
    