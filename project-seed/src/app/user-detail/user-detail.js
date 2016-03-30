angular.module('ps.user-detail', [
  'ui.router',
  'ps.user-detail.repos',
  'ps.user-detail.events'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userDetail', {
        url: '/users/:username',
        templateUrl: 'user-detail/user-detail.tpl.html',
        controller: 'UserDetailCtrl as userDetail'
      })
  })

  .controller('UserDetailCtrl', function UserDetailCtrl($stateParams, userService, $state, $uibModal) {
    var userDetail = this;

    $uibModal.open({
      template: '<h1>Hi modal!</h1>',
      controller: function() {
        console.log('in the modal!!!');
      }
    });

    userDetail.viewUserList = function() {
      $state.go('userList'); //params as second arg!
    };
    
    userService.fetchUser($stateParams.username).then(function(user) {
      userDetail.user = user;
    });
  })
;

