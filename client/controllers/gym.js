require('../services/gym');

angular.module(MODULE_NAME)
.controller('gymCtrl', ['$scope', 'GymService', function($scope, GymService) {
    $scope.btnGuardar = btnGuardar
    $scope.init = init
    $scope.btnBorrar = btnBorrar
    $scope.verificarNombre = verificarNombre
    $scope.verificarApellido = verificarApellido
    $scope.verificarDireccion = verificarDireccion
    $scope.verificarInterior = verificarInterior
    $scope.verificarEstado = verificarEstado
    $scope.verificarCelular = verificarCelular

    $scope.datos = {
        nombre: '',
        apellido: '',
        direccion: '',
        interior: '',
        estado: '',
        celular: ''
    }
    

    function btnGuardar() {
        var nombre = $scope.datos
        GymService.agregarUsuario(nombre)
        .success(function(res){
            alert('Se agrego el usuario')
            location.reload()
        })
    }
    function btObtner (){
        GymService.obtenerUsuario()
        .success(function(res){
            $scope.datos_list = res.result 
            console.log(res)
        })
    }
    function init() {
        btObtner ()
    }
    function btnBorrar(dato) {
        var nombre = dato
        //console.log(nombre,'¿<-------------')
        GymService.borrarUsuario(nombre)
        .success(function(res){
            alert('Se agrego borró el usuario')
            location.reload()
        })
    }

    function verificarNombre() {
        var d = $scope.datos
        console.log(d,'<--------------')
        if (d.nombre.length === 0) {
            alert('El campo nombre es requerido')
        }
    }

    function verificarApellido() {
        var d = $scope.datos
        console.log(d,'<--------------')
        if (d.apellido.length === 0) {
            alert('El campo Apellido es requerido')
        }
    }

    function verificarDireccion() {
        var d = $scope.datos
        console.log(d,'<--------------')
        if (d.direccion.length === 0) {
            alert('El campo Direccion es requerido')
        }
    }

    function verificarInterior() {
        var d = $scope.datos
        console.log(d,'<--------------')
        if (d.interior.length === 0) {
            alert('El campo Interior es requerido')
        } else {
            if (isNaN(d.interior)) {
                alert('El campo interior debe de ser numerico')
            }
        }
    }

    function verificarEstado() {
        var d = $scope.datos
        console.log(d,'<--------------')
        if (d.estado.length === 0) {
            alert('El campo Estado es requerido')
        }
    }

    function verificarCelular() {
        var d = $scope.datos
        console.log(d,'<--------------')
        if (d.celular.length === 0) {
            alert('El campo Celular es requerido')
        } else{
            if (isNaN(d.celular)) {
                alert('El campo interior debe de ser numerico')
            } else {
            if ((d.celular.length!=10)) {
                alert("El celular debe de tener 10 Digitos.");
                }
            }   
        }
    }

}]);
