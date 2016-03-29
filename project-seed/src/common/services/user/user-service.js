angular.module('ps.services.user-service', [])

  .service('userService', function UserService($http) {
    var userService = this;

    userService.fetchUsers = function() {
      return $http.get('https://api.github.com/users').then(function (result) {
        return result.data;
      })
    }
  })
;