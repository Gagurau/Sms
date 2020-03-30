const db = require ('../config/db.config')
const HistoryPasssword = db.historyPassword

exports.create = async function (req, res){
        const history = await HistoryPasssword.create(req.body)
        .then(function(){
        res.status(201).send(history)})
    .catch(function(err){
            res.status(400)
    })
}

exports.findById = async function(req, res){
    const history = await HistoryPasssword.findByPk(req.body.id)
    .then(function(){
        req.status(200).send(history)
    })
    .catch(function(erro){
        req.status(404).send("Password não cadastrado")
    })
}