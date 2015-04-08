angular.module('compare.actors', [])

.controller('actorController', function($scope, $q, $location, Actors) {

  $scope.data = {};

  $scope.getInfo = function() {
    return Actors.getInfo($scope.names.actor2)
    .then(function () {
      $location.path ('/movies')
    });
  }
})