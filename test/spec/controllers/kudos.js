'use strict';

describe('Controller: KudosCtrl', function () {

  // load the controller's module
  beforeEach(module('resumeApp'));

  var KudosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KudosCtrl = $controller('KudosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
