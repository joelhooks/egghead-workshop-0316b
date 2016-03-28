angular.module('app', [])
  .controller('AppCtrl', function AppCtrl($scope) {
    console.log($scope);

    $scope.firstName = "Joel";

    $scope.message = "This is a message from the controller";

    $scope.$watch('firstName', function() {
      console.log($scope.firstName)
    })
  })
;

