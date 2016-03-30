describe('userList', function() {
  var userList,
    userService;

  beforeEach(module('ps.user-list'));
  beforeEach(inject(function($controller) {
    setUserService();

    userList = $controller('UserListCtrl', {
      userService: userService
    });
  }));

  it('should create a controller instance', function() {
    expect(userList).toBeDefined();
  });

  it('should call fetchUsers on the userService', function() {
    expect(userService.fetchUsersCalled).toBe(true);
  });

  it('should set the users property when promise resolves', function() {
    expect(userList.users).toBeDefined();
  });

  function setUserService() {
    userService = {
      fetchUsersCalled: false,
      fetchUsers: function () {
        this.fetchUsersCalled = true;
        return {
          then: function (callback) {
            callback([]);
          }
        }
      }
    };
  }
});