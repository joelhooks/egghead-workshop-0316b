angular.module('ps.user-detail.events', [
  'ui.router'
])
  .config(function ($stateProvider) {
    console.log('events config')
    $stateProvider
      .state('userDetail.events', {
        url: '/events',
        controller: 'UserDetailEventsCtrl as userDetailEvents',
        templateUrl: 'user-detail/events/user-detail-events.tpl.html'
      })
    ;
  })
  .controller('UserDetailEventsCtrl', function UserDetailEventsCtrl(userService, $stateParams) {
    var userDetailEvents = this;

    userService.fetchUserEvents($stateParams.username).then(function(events) {
      userDetailEvents.events = events;
    })
  })
;
