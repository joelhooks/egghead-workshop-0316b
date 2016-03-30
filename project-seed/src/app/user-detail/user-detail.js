angular.module('ps.user-detail', [
  'ui.router',
  'ps.user-detail.repos',
  'ps.user-detail.events',
  'ps.user-detail.comment'
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

    userDetail.openAddComment = function() {
      $state.go('userDetail.comment');
    };



    userDetail.viewUserList = function() {
      $state.go('userList'); //params as second arg!
    };
    
    userService.fetchUser($stateParams.username).then(function(user) {
      userDetail.user = user;
    });
  })
;

