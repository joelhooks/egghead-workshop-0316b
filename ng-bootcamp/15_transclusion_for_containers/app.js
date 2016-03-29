angular.module('example', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.message = 'It is delicious';

    app.donuts = [
      {
        flavor: 'chocolate',
        toppings: ['coconut', 'sugar']
      },
      {
        flavor: 'cake',
        toppings: ['cinnamon', 'sugar']
      }
    ]
  })

  .controller('DonutCtrl', function($element, $attrs) {
    var donut = this;

    donut.eat = function() {
      console.log('nom nom nom', donut.ingredients);
    }
  })

  .directive('donut', function() {
    return {
      restrict: 'E',
      scope: {
        ingredients: '='
      },
      transclude: true,
      bindToController: true,
      templateUrl: 'donut.tpl.html',
      controller: 'DonutCtrl as donut'
    }
  })

;

