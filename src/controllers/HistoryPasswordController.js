const db = require ('../config/db.config')
const HistoryPasssword = db.historyPassword

exports.create = async function (req, res){
    HistoryPasssword.create(req.body)
    .then(function(){
        res.status(201).send(req.body)})
    .catch(function(err){
        res.status(400).send(err)
    })
},
exports.findByPk = async function(req, res){
    const history = await HistoryPasssword.findByPk(req.params.id)
    if (history){    
        res.status(200).send(history)
    }else{
        re.status(404).send("Password não cadastrado")
    }
}