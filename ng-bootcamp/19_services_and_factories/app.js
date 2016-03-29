angular.module('example', [
    'example.services.people-service'
])

  .controller('AppCtrl', function AppCtrl(peopleService) {
    var app = this;

    peopleService.fetchPeople().then(function(people) {
      app.people = people;
      console.log(people);
    });

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
  })



;

