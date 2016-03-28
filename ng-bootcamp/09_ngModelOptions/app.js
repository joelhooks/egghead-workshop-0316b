angular.module('example', [])
  .controller('AppCtrl', function AppCtrl($http) {
    var app = this,
      url = 'http://www.json-generator.com/api/json/get/bOMLpdnhnS';

    app.filterModelOptions = {
      debounce: {
        default: 250,
        blur: 1500
      },
      allowInvalid: true
    };

    app.sortField = 'firstName';
    app.updateSortField = function(newField) {
      if(newField === app.sortField) {
        newField = '-' + newField
      }
      app.sortField = newField;
    };
    
    $http.get(url).then(function successHandler(result) {
      app.people = result.data;
    })
    
  })
;

