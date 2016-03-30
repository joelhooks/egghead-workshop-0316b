angular.module('ps.user-detail.repos', [
  'ui.router'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userDetail.repos', {
        url:'/repos',
        templateUrl: 'user-detail/repos/user-detail-repos.tpl.html',
        controller: 'UserDetailReposCtrl as userDetailRepos',
        resolve: {
          repos: function($stateParams, userService) {
            return userService.fetchUserRepos($stateParams.username)
          }
        }
      })
  })
  .controller('UserDetailReposCtrl', function(repos) {
   var userDetailRepos = this;

    userDetailRepos.repos = repos;
  })
;