var ctrl = require('../controllers/gym')
var express = require('express')
var router = express.Router()

router.post('/nuevo/usuario', nuevoUsuario)
router.get('/obtener/usuario', obtenerUsuario)
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

function borrarUsuario(req, res) {
  var a = req.body
  console.log(a,'ROUTAS')
  ctrl.borrarUsuario(a)
  .then(function (result) {
    res.json(result)
  })
}


module.exports = router