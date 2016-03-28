angular.module('example', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;
    app.someName = 'Geronimo';

    app.theMovie = {
      title: 'Star Wars',
      actor: 'Robert Redford'
    };

    app.sayHello = function(to) {
      console.log('Hello ' + to);
    }
  })
  .directive('movieBanner', function() {
    return {
      restrict: 'E',
      scope: {
        movie: '=',
        greet: '&'
      },
      template: '<h1 ng-click="greet({to: movie.actor})">I like {{movie.actor}} in {{movie.title}}.</h1>',

      link: function(scope, elem, attrs) {
        scope.movie = {
          title: 'Indiana Jones and the Kingdom of the Crystal Skull',
          actor: 'Matt Damon'
        }
      }

    }
  })

  .directive('nameHeadline', function() {
    return {
      restrict: 'E',
      scope: {
        name: '@'
      },
      template: '<h1>The name is: {{name}}</h1>'
    }
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

