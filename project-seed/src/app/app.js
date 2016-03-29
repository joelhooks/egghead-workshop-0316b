angular.module('project-seed', [
  'project-seed.common',
  'ngAria',
  'ui.router',
  'templates-app',
  'ps.user-list'
])
  .controller('AppCtrl', function AppCtrl($http) {
    var app = this;

    $http.get('https://api.github.com/users').then(function(result) {
      app.users = result.data;
    })
  })
;