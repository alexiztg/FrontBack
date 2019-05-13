var ctrl = require('../controllers/personal')
var express = require('express')
var router = express.Router()

router.post('/nuevo/usuario', nuevoUsuario)
router.get('/obtener/usuario', obtenerUsuario)
router.get('/obtener/usuarioactivo', obtenerUsuarioActivo)
router.get('/obtener/usuarioinactivo', obtenerUsuarioInactivo)
router.put('/borrar/usuario', borrarUsuario)


function nuevoUsuario(req, res) {
  var d = req.body
  console.log(d,'ROUTAS')
  ctrl.nuevoUsuario(d)
  .then(function (result) {
    res.json(result)
  })
}

function obtenerUsuario(req, res) {
  ctrl.obtenerUsuario()
  .then(function (result) {
    res.json(result)
  })
}

function obtenerUsuarioActivo(req, res) {
    ctrl.obtenerUsuarioActivo()
    .then(function (result) {
      res.json(result)
    })
  }

  function obtenerUsuarioInactivo(req, res) {
    ctrl.obtenerUsuarioInactivo()
    .then(function (result) {
      res.json(result)
    })
  }  

function borrarUsuario(req, res) {
  var a = req.body
  console.log(a,'ROUTAS')
  ctrl.borrarUsuario(a)
  .then(function (result) {
    res.json(result)
  })
}


module.exports = router