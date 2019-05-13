require('../services/personal');

angular.module(MODULE_NAME)
.controller('personalCtrl', ['$scope', 'personalService', function($scope, personalService) {
    $scope.btnGuardar = btnGuardar
    $scope.init = init
    $scope.btnBorrar = btnBorrar
    $scope.verificarNombre = verificarNombre
    $scope.verificarAp = verificarAp
    $scope.verificarEdad = verificarEdad
    $scope.verificarCorreo = verificarCorreo
    $scope.verificarTelefono = verificarTelefono
    $scope.verificarActivo = verificarActivo
    $scope.swicheo = swicheo
    $scope.mostrar= true

    $scope.datos = {
        nombre: '',
        ap: '',
        edad: '',
        correo: '',
        telefono: '',
        activo: ''
    }
    
    function swicheo (){
        if ($scope.mostrar){
            $scope.mostrar=false
            btObtnerActivo()
        } else {
            $scope.mostrar=true
            btObtnerInactivo()
        }

    } 

    function btnGuardar() {
        var nombre = $scope.datos
        personalService.agregarUsuario(nombre)
        .success(function(res){
            alert('Se agrego el usuario')
            location.reload()
        })
    }
    function btObtner (){
        personalService.obtenerUsuario()
        .success(function(res){
            $scope.datos_list = res.result 
            console.log(res)
        })
    }
    function btObtnerActivo (){
        personalService.obtenerUsuarioActivo()
        .success(function(res){
            $scope.datos_list = res.result 
            console.log(res)
        })
    }function btObtnerInactivo (){
        personalService.obtenerUsuarioInactivo()
        .success(function(res){
            $scope.datos_list = res.result 
            console.log(res)
        })
    }
    function init() {
        btObtner ()
        btObtnerActivo()
        btObtnerInactivo()


    }
    function btnBorrar(dato) {
        var nombre = dato
        //console.log(nombre,'¿<-------------')
        personalService.borrarUsuario(nombre)
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

    function verificarAp() {
        var d = $scope.datos
        console.log(d,'<--------------')
        if (d.ap.length === 0) {
            alert('El campo Apellido es requerido')
        }
    }

    function verificarCorreo() {
        var d = $scope.datos
        console.log(d,'<--------------')
        if (d.correo.length === 0) {
            alert('El campo Correo es requerido')
        }else{              

            if (!validateEmail(d.correo)) {
             alert('error')   
            } else {

            }

        }

    }

    function verificarEdad() {
        var d = $scope.datos
        console.log(d,'<--------------')
        if (d.edad.length === 0) {
            alert('El campo Edad es requerido')
        } else {
            if (isNaN(d.edad)) {
                alert('El campo Edad debe de ser numerico')
            }
        }
    }
    function verificarActivo() {
        var d = $scope.datos
        console.log(d,'<--------------')
        if (d.activo.length === 0) {
            alert('El campo Activo es requerido')
        }
    }

    function verificarTelefono() {
        var d = $scope.datos
        console.log(d,'<--------------')
        if (d.telefono.length === 0) {
            alert('El campo Celular es requerido')
        } else{
            if (isNaN(d.telefono)) {
                alert('El campo telefono debe de ser numerico')
            } else {
            if ((d.telefono.length!=10)) {
                alert("El telefono debe de tener 10 Digitos.");
                }
            }   
        }
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

}]);
