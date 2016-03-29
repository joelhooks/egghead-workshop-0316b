angular.module('example', [])

  .constant('BASE_API_URL', 'https://api.github.com')
  .constant('CONFIG', {
    version: '0.0.1',
    api_url: 'url goes here'
  })

  .value('someValue', [1,0,0,0,0,0])

  .config(function(CONFIG, BASE_API_URL, someValueProvider) {
    console.log(BASE_API_URL, CONFIG, someValueProvider.$get())
  })

  .controller('AppCtrl', function AppCtrl($window, $document, $location, $timeout, $interval) {
    var app = this;
 
    $http.get(BASE_API_URL + '/users')
  })
;

