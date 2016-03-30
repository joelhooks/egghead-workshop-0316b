angular.module('ps.forms', [
  'ngMessages'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('forms', {
        url: '/forms',
        templateUrl: 'forms/forms.tpl.html',
        controller: 'FormsCtrl as forms'
      })
  })
  .controller('FormsCtrl', function() {
    var forms = this;

    forms.data = {}

    forms.submit = function(isValid) {
      if(isValid) {
        console.log('submit to service', forms.data);
      } else {
        console.log('NOPE')
      }
    }
  })

  .directive('nameValidator', function($http, $q) {
    return {
      require: 'ngModel',
      link: function(scope, elem, attrs, ngModel) {
        ngModel.$asyncValidators.name = function(modelValue) {
          return $http.get('https://api.github.com/users/joelhooks').then(function(result) {
            if(result.data.login !== modelValue) {
              return $q.reject('FAIL')
            }
          })
        }
      }
    }
  })

  .directive('hasNameValidator', function() {
    return {
      require: 'ngModel',
      link: function(scope, elem, attrs, ngModel) {
        ngModel.$validators.hasName = function(modelValue) {
          var valid = true;
          if(modelValue) {
            valid = modelValue.includes(attrs.hasNameValidator);
          }
          return valid;
        }
      }
    }
  })
;