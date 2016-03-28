angular.module('example', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;
  })

  .directive('beCareful', function() {
    return {
      restrict: 'E',
      scope: {},
      template: '<h1>Changes leak. {{notIsolated}}</h1>',
      link: function(scope, elem, attrs) {
        elem.on('mouseover', function() {
          scope.notIsolated = Math.random();
          scope.$apply();
        })
      }
    }
  })

  .directive('dateDisplayer', function($timeout) {
    return {
      restrict: 'E',
      template: '<h1 class="well">The date is: {{date}}</h1>',
      link: function(scope, elem, attrs) {
        elem.on('click', function() {
          scope.date = new Date().toJSON().slice(0,10);
          scope.$apply();
        })
      }
    }
  })

  .directive('imFooter', function() {
    return {
      restrict: 'E',
      template: '<h3>This is the footer</h3>'
    }; // Directive Definition Object DDO
  })
;

