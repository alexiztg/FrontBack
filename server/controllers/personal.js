var model=require('../models/personal')
module.exports={
    nuevoUsuario:nuevoUsuario,
    obtenerUsuario:obtenerUsuario,
    obtenerUsuarioActivo:obtenerUsuarioActivo,
    obtenerUsuarioInactivo:obtenerUsuarioInactivo,
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

function obtenerUsuarioActivo (){
    return new Promise(function(resolve, reject){
        model.obtenerUsuarioActivo()
        .then(function(res){
            resolve(res)
        })
    })
}

function obtenerUsuarioInactivo (){
    return new Promise(function(resolve, reject){
        model.obtenerUsuarioInactivo()
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