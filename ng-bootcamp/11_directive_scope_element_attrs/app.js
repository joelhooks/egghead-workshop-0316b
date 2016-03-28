angular.module('example', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;
  })

  .directive('giveme', function() {
    return function(scope, element, attrs) {
      console.log(element);
    }
  })
  .directive('appender', function() {
    return function(scope, element, attrs) {
      var toggleClass = function () {
        element.toggleClass('text-danger');
      };

      element.on('mouseover', toggleClass);

      scope.$on('$destroy', function() {
        element.off('mouseover', toggleClass)
      })
    }
  })
;

