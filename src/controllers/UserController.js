const db = require('../config/db.config')
const jwt = require ('jsonwebtoken')
const User = db.user

exports.create =  async function(req, res){
      try{
        const user = await User.create(req.body)
        res.status(201).send(user)
    }catch(err){
        res.status(409).send("Email cadastrado")
    }},

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
            auth:false,
            alert: "Usuário desativado"})
    }
    var token = jwt.sign({id}, process.env.SECRET,{
        expiresIn:600
    })
    res.status(200).send({
        auth:true,
        token:token,
        user:{
                id:user.id,
                email: email
    }
    })},

exports.update = async function(req,res){
     var body = req.body
    User.update({
    name: body.name,
    username: body.username,
    email: body.email,
    password: body.password,
    active: body.active 
    },{
        where: {id: body.id}
    })  
    res.status(200)},

exports.auth = async function (req, res){
    body = req.body
    let password = body.password
    let email = body.email
    const crypt = require('crypto')
    const alg = 'aes-256-ctr'
    const cipher = crypto.createCipher(alg,pwd)
    const crypted = cipher.update(password, 'utf8', 'hex')
    User.findOne({where:{email:email}})
        .then( promise  =>{
            if(promise.password === crypted){
                res.status(200).send(promise)
            }else{
                res.status(403).send("Usuário ou senha inválido")
            }
        }).catch(err => res.status(400).send("Erro inesperado"))
    }

exports.findByPk = async function(req,res){
    const user = await User.findByPk(req.body.id)
    if (user){
        id = user.id
        var token = jwt.sign(
            {id},
            process.env.SECRET,
            {expiresIn:600})
        res.status(200).res({
            auth:true,
            token:token,
            user:{
                id: user.id,
                email: user.email
            }
        })
        }
    res.status(404).send({auth:false, alert:"Usuário não encontrado"})
    }
