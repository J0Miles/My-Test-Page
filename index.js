var myApp = angular.module('myApp', []);

myApp.controller('MainPageController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);
