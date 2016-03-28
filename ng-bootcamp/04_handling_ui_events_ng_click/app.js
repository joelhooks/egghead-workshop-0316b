angular.module('example', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.sayHello = function() {
      console.log('hello');
    }

    app.updateMessage = function(newMessage) {
      if(newMessage) {
        app.message = newMessage;
      } else {
        app.message = 'ERROR';
      }
    }
  })
;

