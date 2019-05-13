var urlusuario = helpers.getUrl();

angular.module(MODULE_NAME)
.service('personalService', ['$http', function($http) {

  var urlBase = urlusuario + '/personal';

  this.agregarUsuario = function (d) {
    return $http.post(urlBase + "/nuevo/usuario", d);
  };
  this.obtenerUsuario = function () {
    return $http.get(urlBase + "/obtener/usuario");
    
  };

  this.obtenerUsuarioActivo = function () {
    return $http.get(urlBase + "/obtener/usuarioactivo");
    
  };
  this.obtenerUsuarioInactivo = function () {
    return $http.get(urlBase + "/obtener/usuarioinactivo");
    
  };
  this.borrarUsuario = function (a) {
    return $http.put(urlBase + "/borrar/usuario",a);
  };

}]);
