angular.module('ps.user-list', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('userList', {
        url: '',
        templateUrl: 'user-list/user-list.tpl.html',
        controller: 'UserListCtrl as userList'
      })
  })
  .controller('UserListCtrl', function UserListCtrl() {
    var userList = this;
    console.log('user list controller')
  })
;