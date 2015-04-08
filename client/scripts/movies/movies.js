angular.module('compare.movies', [])

.controller('movieController', function($scope, Actors) {

  $scope.data = {};
  $scope.showInfo = function() {
   $scope.data  =  Actors.showInfo();
  }

  $scope.showInfo();

})