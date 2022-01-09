const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middleware/middlewareMulterUsers')
let validacion = require("../middleware/validatorUsers")


router.get('/login', userController.login)
router.get('/register', userController.register)
router.post('/register',upload.single("image"),validacion,userController.processRegister);


module.exports = router;