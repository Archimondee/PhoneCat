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

    beforeEach(inject(function ($controller) {
        scope = {};
        ctrl = $controller('PhoneListCtrl', { $scope: scope });
    }));


    it('should create "phones" model with 3 phones', inject(function ($controller) {
        //var scope = {},
        //    ctrl = $controller('PhoneListCtrl', { $scope: scope });

        expect(scope.phones.length).toBe(3);
    }));

    it('should set the default value of orderProp model', function () {
        expect(scope.orderProp).toBe('age');
    });

});


