angular.module('example', [])
  .controller('DemoCtrl', function($scope) {
    //lives and dies with the DOM it is assigned to.
    //ng-if dynamically creates and destroys the ctrl.
    console.log('CREATED!!!');

    $scope.$on('$destroy', function() {
      console.log('DEATH!!!');
    })
  })
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.canShow = function() {
      return app.message === 'please'
    };

    app.sayHello = function() {
      console.log('hello');
    };

    app.updateMessage = function(newMessage) {
      if(newMessage) {
        app.message = newMessage;
      } else {
        app.message = 'ERROR';
      }
    }
  })
;

