const db = require ('../config/db.config')
const HistoryPasssword = db.historyPassword

module.exports = controller =>{
    create = async function (req, res){
        try{
            const historyPassword = await HistoryPasssword.create(req.body)
            res.status(201)
        }catch(err){
            res.status(400)
        }
    }

}