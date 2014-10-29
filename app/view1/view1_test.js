'use strict';

//describe('myApp.view1 module', function() {

//  beforeEach(module('myApp.view1'));

//  describe('PhoneListCtrl', function () {

//      beforeEach(module('myApp.view1'));

//      it('should create "phones" model with 3 phones', inject(function ($controller) {
//          var scope = {},
//              ctrl = $controller('PhoneListCtrl', { $scope: scope });

//          expect(scope.phones.length).toBe(3);
//      }));

//  });
//});

describe('PhoneListCtrl', function () {

    beforeEach(module('myApp.view1'));

    it('should create "phones" model with 3 phones', inject(function ($controller) {
        var scope = {},
            ctrl = $controller('PhoneListCtrl', { $scope: scope });

        expect(scope.phones.length).toBe(3);
    }));

});


