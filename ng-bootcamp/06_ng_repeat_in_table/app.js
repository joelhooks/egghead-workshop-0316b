angular.module('example', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.numbers = [0,0,0,0,0,1];
    
    app.people = [
      {
        firstName: 'Henry',
        lastName: 'Smith'
      },
      {
        firstName: 'Alice',
        lastName: 'Winters'
      },
      {
        firstName: 'George',
        lastName: 'Gonzales'
      }
    ];
  })
;

