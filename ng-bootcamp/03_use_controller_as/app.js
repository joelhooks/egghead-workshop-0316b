angular.module('example', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.firstName = "Joel";
    app.message = "This is a message from the controller";
  })
;

