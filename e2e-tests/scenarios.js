'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('Phone list view', function () {

      beforeEach(function () {
          browser.get('app/index.html');
      });


      it('should filter the phone list as a user types into the search box', function () {

          var phoneList = element.all(by.repeater('phone in phones'));
          var query = element(by.model('query'));

          expect(phoneList.count()).toBe(3);

          query.sendKeys('nexus');
          expect(phoneList.count()).toBe(1);

          query.clear();
          query.sendKeys('motorola');
          expect(phoneList.count()).toBe(2);
      });
  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});


//describe('my App', function () {

//    describe('Phone list view', function () {

//        beforeEach(function () {
//            browser.get('app/index.html');
//        });


//        it('should filter the phone list as a user types into the search box', function () {

//            var phoneList = element.all(by.repeater('phone in phones'));
//            var query = element(by.model('query'));

//            expect(phoneList.count()).toBe(3);

//            query.sendKeys('nexus');
//            expect(phoneList.count()).toBe(1);

//            query.clear();
//            query.sendKeys('motorola');
//            expect(phoneList.count()).toBe(2);
//        });
//    });
//});
