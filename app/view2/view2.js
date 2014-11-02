'use strict';

angular.module('myApp.view2', ['ngRoute', 'phonecatFilters'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2/:phoneId', {
    templateUrl: 'view2/view2.html',
    controller: 'PhoneDetailCtrl'
  });
}])

.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function (data) {
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
    });

    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}]);