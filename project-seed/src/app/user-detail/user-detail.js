angular.module('ps.user-detail', [
  'ui.router',
  'ps.user-detail.repos'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userDetail', {
        url: '/users/:username',
        templateUrl: 'user-detail/user-detail.tpl.html',
        controller: 'UserDetailCtrl as userDetail'
      })
  })

  .controller('UserDetailCtrl', function UserDetailCtrl($stateParams, userService, $state) {
    var userDetail = this;

    console.log('USER DETAIL')

    userDetail.viewUserList = function() {
      $state.go('userList'); //params as second arg!
    };
    
    userService.fetchUser($stateParams.username).then(function(user) {
      userDetail.user = user;
    });
  })
;

