function jerarquiaMiddleware(req,res,next){
    
    if(req.session.userLoged.categoria == 'administrador '){
        next();
    }else{
        return res.redirect('/')
    }
}

module.exports = jerarquiaMiddleware;