angular.module('example.services.people-service', [])
  .factory('doStuff', function() {
    return function() {
      console.log('doin stuff')
    }
  })
  .factory('Person', function($http) {
    return function Person(person) {
      this.firstName = person.firstName;
      this.lastName = person.lastName;
      this.phone = person.phone;
      this.email = person.email;
      this.company = person.company;

      this.save = function() {
        //call remote service
      }
    }
  })
  // new PeopleService
  .service('peopleService', function PeopleService($http, Person, doStuff) {
    var peopleService = this,
      url = 'http://www.json-generator.com/api/json/get/bOMLpdnhnS';

    peopleService.fetchPeople = function () {
      return $http.get(url).then(function successHandler(result) {
        return result.data.map(function(person) {
          return new Person(person);
        });
      })
    }
  })
;