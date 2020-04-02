const db = require ("../config/db.config")
const Message = db.message
del = function (userSrc, userDst){

}
exports.create = async function(req,res){
    req.body.date = new Date()
    Message.create(req.body)
    .then(function(){
        res.status(201).send(req.body)
    }).catch(function(err){
        res.status(400).send(err)
    })
},

exports.findByPk = async function(req,res){
    const message = await Message.findByPk(req.params.id)
    if (message){
        res.status(200).send(message)
    }else{
        res.status(404).send("Mensagem não encontrada")
    }
},
exports.findBySrc = async function(req,res){
    const messages = await Message.findAll({where: {
        idSrc: req.params.idSrc,
        statusSrc: 1 }})
    
        if (messages.length >0 && messages !== null){
        res.status(200).send(messages)
    }else{
        res.status(404).send("Nenhuma mensagem encontrada")
    }
},
exports.findByDst = async function (req, res){
    const messages = await Message.findAll({where:{
        idDst: req.params.idDst,
        statusDst: 1}})
    if (messages.length >0 && messages !== null){
        res.status(200).send(messages)
    }else{
        res.status(404).send("Nenhuma mensagem encontrada")
    }
},
exports.deleteSrc = async function(req,res){
    const message = await Message.findByPk(req.params.id)
    if (message){
        Message.update({
            statusSrc: 2,
        },{ where:{idSrc:req.params.id}
        })
        .then(function(){
            res.status(200).send(req.body)
        })
    }else{
        res.status(404).send("Mensagem não encontrada")
    }
},
exports.deleteDst = async function(req,res){
    const message = await Message.findByPk(req.params.id)
    if (message){
        Message.update({
            statusDst: 2,
        },{ where:{idDst:req.params.id}
        })
        .then(function(){
            res.status(200).send("Mensagem deletada")
        })
    }else{
        res.status(404).send("Mensagem não encontrada")
    }
},
exports.deleteTalk = async function(req, res){
    const messages = await Message.findAll({where:{idSrc: req.params.idSrc}})
    console.log(messages)
    if (messages){
        Message.update({
            statusSrc: 2
        }, {where: {
            idSrc:req.params.idSrc,
            idDst:req.params.idDst}
    })
        Message.update({
            statusDst:2
        },{where: {
            idDst:req.params.idSrc,
            idSrc:req.params.idDst}})
        .then(function(){
        res.status(200).send("Conversa deletada")
    })
    }else{
        res.status(400).send("Conversa não encontrada")
    }
},
exports.deleteAllTalks = async function(req,res){
    const messages = Message.findAll({where:{idSrc: req.params.id}})
    if (messages){
        Message.update({
            statusSrc: 2
        }, {where:{idSrc: req.params.id}})
        Message.update({
            statusDst:2
        }, {where: {idDst: req.params.id}})
    .then(function(){
        res.status(200).send("Conversas deletadas")
    })
    }else{
        res.status(400).send("Nenhuma conversa encontrada")
    }
}