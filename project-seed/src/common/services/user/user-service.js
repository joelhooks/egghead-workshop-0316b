angular.module('ps.services.user-service', [])

  .service('userService', function UserService($http, baseApiUrl) {
    var userService = this;

    userService.fetchUsers = function() {
      return $http.get(baseApiUrl + '/users').then(function (result) {
        return result.data;
      })
    }
  })
;