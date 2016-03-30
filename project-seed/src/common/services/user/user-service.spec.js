describe('userService', function() {
  var userService,
    allUsers,
    $httpBackend;

  beforeEach(module('ps.services.user-service', {
    baseApiUrl: '/api'
  }));
  
  beforeEach(inject(function(_userService_, _$httpBackend_) {
    userService = _userService_;
    $httpBackend = _$httpBackend_;

    setupMocks();
  }));
  
  it('should create a userService instance', function() {
    expect(userService).toBeDefined();
  });
  
  it('should respond with user data', function() {
    userService.fetchUsers().then(function(users) {
      expect(users).toEqual(allUsers);
    });

    $httpBackend.flush();
  });

  function setupMocks() {
    jasmine.getJSONFixtures().fixturesPath = 'base/data/users/';
    allUsers = getJSONFixture('default.json');

    $httpBackend.whenGET('/api/users').respond(allUsers);
  }
});