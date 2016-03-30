angular.module('ps.services.user-service', [])

  .service('userService', function UserService($http, baseApiUrl) {
    var userService = this;

    
    userService.fetchUserRepos = function(username) {
      return $http.get(baseApiUrl + '/users/' + username + '/repos').then(function (result) {
        return result.data;
      })   
    };
    
    userService.fetchUser = function(username) {
      return $http.get(baseApiUrl + '/users/' + username).then(function(result) {
        return result.data;
      })
    };

    userService.fetchUsers = function() {
      return $http.get(baseApiUrl + '/users').then(function (result) {
        return result.data;
      })
    }
  })
;