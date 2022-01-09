const { localsName } = require("ejs");

const modelController = require('../model/jsonDatabase');
const jsonDB = require('../model/jsonDatabase');
const usersModel = jsonDB('users')

const { validationResult } = require("express-validator")
const userController = {
    login : (req,res)=>{
       return res.render('login')
    },

    register : (req,res)=>{
       return res.render('users/register')
    },
    processRegister : (req,res)=>{
        const resultValidation = validationResult(req);
        
        if(resultValidation.errors.length > 0){
            return res.render("users/register",{
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
        const newUsuario = {
            nombre : req.body.nombre,
            apellido : req.body.lastName,
            email : req.body.email,
            telefono : req.body.telefono,
            password : req.body.password,
            genero : req.body.genero,
            categoria : req.body.persona,
            confirmarPassword : req.body.confirmarPassword,
            avatar : req.file.filename
        }
        usersModel.create(newUsuario)
        res.redirect("/")
    }
}

module.exports = userController;