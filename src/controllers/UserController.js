const db = require('../config/db.config')
// const jwt = require ('jsonwebtoken')
const User = db.user

exports.create =  async function(req, res){
    User.create(req.body)
    .then(function(){
        res.status(201).send(req.body)
    }).catch(function (erro){
        res.status(409).send(erro)
    })
},

exports.login = async function (req, res){
    const email = req.body.email
    const password = req.body.password
    var user
    if (login){
        user = await User.findOne({
            where: {email: email}
        })
    }
    if (!user){
        return res.status(404).send({auth:false, alert:"Email não cadastrado"})
    }
    if (password !== user.password){
        return res.status(400).send({
            auth:false, 
            alert:"Senha inválida"})
        }
    if (user.active===0){
        return res.status(400).send({
            // auth:false,
            alert: "Usuário desativado"})
    }
    // var token = jwt.sign({id}, process.env.SECRET,{
    //     expiresIn:600
    // })
    res.status(200).send({
        // auth:true,
        // token:token,
        user:{
                id:user.id,
                email: email
    }
    })},

exports.update = async function(req,res){
    var user = await User.findByPk(req.params.id)
    if (user){
        var body = req.body
        User.update({
        name: body.name,
        username: body.username,
        email: body.email,
        password: body.password,
        active: body.active 
        },{
            where: {id: req.params.id}
        })
        .then(function(){
            res.status(200).send(body)
        })
    }else{
        res.status(404).send("Usuário não encontrado")
    }
},

// exports.auth = async function (req, res){
//     body = req.body
//     let password = body.password
//     let email = body.email
//     const crypto = require('crypto')
//     const alg = 'aes-256-ctr'
//     const cipher = crypto.createCipher(alg,pwd)
//     const crypted = cipher.update(password, 'utf8', 'hex')
//     User.findOne({where:{email:email}})
//         .then( promise  =>{
//             if(promise.password === crypted){
//                 res.status(200).send(promise)
//             }else{
//                 res.status(403).send("Usuário ou senha inválido")
//             }
//         }).catch(err => res.status(400).send("Erro inesperado"))
//     }

exports.findByPk = async function(req,res){
    const user = await User.findByPk(req.params.id)
    if (user){
        id = user.id
        // var token = jwt.sign(
        //     {id},
        //     process.env.SECRET,
        //     {expiresIn:600})
        res.status(200).send({
            // auth:true,
            // token:token,
            user:{
                id: user.id,
                name:user.name,
                username:user.username,
                email: user.email
            }
        })
        }else{
        res.status(404).send({
            // auth:true, 
            alert:"Usuário não encontrado"})}
}

exports.findAll = async function(req,res){
    const users = await User.findAll()
    if (users){
        res.status(200).send(users)
    }else{
        res.status(404).send("vazio")
    }
}