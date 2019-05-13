var model=require('../models/gym')
module.exports={
    nuevoUsuario:nuevoUsuario,
    obtenerUsuario:obtenerUsuario,
    borrarUsuario:borrarUsuario
}

function nuevoUsuario (d){
    return new Promise(function(resolve, reject){
        console.log(d,'CONTROLLERS')
        model.nuevoUsuario(d)
        .then(function(res){
            resolve(res)
        })
    })

}

function obtenerUsuario (){
    return new Promise(function(resolve, reject){
        model.obtenerUsuario()
        .then(function(res){
            resolve(res)
        })
    })
}

function borrarUsuario (a){
    return new Promise(function(resolve, reject){
        console.log(a,'CONTROLLERS')
        model.borrarUsuario(a)
        .then(function(res){
            resolve(res)
        })
    })
}