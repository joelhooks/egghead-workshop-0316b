angular.module('example', [])
  .controller('AppCtrl', function AppCtrl($http) {
    var app = this,
      url = 'http://www.json-generator.com/api/json/get/bOMLpdnhnS';
    
    $http.get(url).then(function successHandler(result) {
      app.people = result.data;
    })
    
  })
;

