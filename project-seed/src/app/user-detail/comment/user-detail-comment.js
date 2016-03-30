angular.module('ps.user-detail.comment', [
  'ui.router'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userDetail.comment', {
        url: '/comment',
        onEnter: function($uibModal) {
          $uibModal.open({
            templateUrl: 'user-detail/comment/user-detail-comment.tpl.html',
            controller: 'UserDetailCommentCtrl as userDetailComment'
          });
        }
      })
  })

  .controller('UserDetailCommentCtrl', function($uibModalInstance, $state) {
    var userDetailComment = this;

    $uibModalInstance.result.then(function (result) {
      console.log('result', result)
    }, function (error) {
      console.log('error', error)
    }).finally(function () {
      $state.go('^')
    });

    userDetailComment.ok = function (text) {
      $uibModalInstance.close(text)
    };

    userDetailComment.cancel = function () {
      $uibModalInstance.dismiss('WE CLOSED IT!!!')
    };
  })
;
