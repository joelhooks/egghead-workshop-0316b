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

    donut.toppings = [];
    
    donut.registerTopping = function(topping) {
      donut.toppings.push(topping);
    };

    donut.eat = function() {
      for(var i = 0; i < donut.toppings.length; i++) {
        console.log('nom ' + donut.toppings[i].name);
        donut.toppings[i].selected = true;
      }
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

  .directive('topping', function() {
    return {
      restrict: 'E',
      scope: {
        name: '@'
      },
      require: '^donut',
      template: '<h3>{{name}} : {{selected}}</h3>',
      link: function(scope, elem, attrs, donutCtrl) {
        donutCtrl.registerTopping(scope);
      }
    }
  })

;

