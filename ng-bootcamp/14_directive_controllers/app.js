angular.module('example', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.donuts = [
      {
        flavor: 'chocolate',
        topping: 'coconut'
      },
      {
        flavor: 'cake',
        topping: 'cinnamon'
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
      bindToController: true,
      templateUrl: 'donut.tpl.html',
      controller: 'DonutCtrl as donut'
    }
  })

;

