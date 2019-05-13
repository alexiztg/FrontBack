var urlusuario = helpers.getUrl();

angular.module(MODULE_NAME)
.service('GymService', ['$http', function($http) {

  var urlBase = urlusuario + '/gym';

  this.agregarUsuario = function (d) {
    return $http.post(urlBase + "/nuevo/usuario", d);
  };
  this.obtenerUsuario = function () {
    return $http.get(urlBase + "/obtener/usuario");
  };
  this.borrarUsuario = function (a) {
    return $http.put(urlBase + "/borrar/usuario",a);
  };

}]);
