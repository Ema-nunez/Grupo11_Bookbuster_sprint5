const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('products')
const mainController = {
    index : (req,res)=>{

        const finalizados = productModel.findAllByField("Finalizado")
        const enEmision = productModel.findAllByField("En Curso")
        const user = req.session.userLogged
        res.render('products/index', {finalizados, enEmision, user})
    }
}

module.exports = mainController;