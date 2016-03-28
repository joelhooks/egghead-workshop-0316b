angular.module('example', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;
  })
  .directive('logMessage', function() {
    return function() {
      console.log('this is my lame behavior. ' + Math.random());
    }
  })
;

