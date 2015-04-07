angular.module('compare.actors', [])

.controller('actorController', function($scope, $q, $location, Actors) {


  $scope.names = {};
  $scope.id1=0;
  $scope.id2=0;

  $scope.compareMovies = function() {
    // $scope.ids = $scope.getIds();
    $scope.getIds().then(function () {
      $location.path ('/movies')

    })

    // $scope.getCredits();
  }

  $scope.getIds = function() {
    return Actors.getIds($scope.names.actor1, $scope.names.actor2)
    .then (function (ids) {
      $scope.id1 = ids[0];
      $scope.id2 = ids[1];
    });
    // $q.all([
    //   Actors.fetchActorId($scope.names.actor1),
    //   Actors.fetchActorId($scope.names.actor2)
    //   ])
    //   .then(function (values){
    //     $scope.id1 = values[0];
    //     $scope.id2 = values[1];
    //   })
    // }
    // ])
    // .then(function (id1, id2) {
    //     $scope.id1 = id1;
    //     $scope.id2 = id2;

    // })
    console.log('outside', $scope.ids)
    // .then(function (thing1, thing2) {
    //   // do what u want
    // })

    //   .then (function(resp) {
    //   })

    //   .then (function (resp) {
    //   })
    //   .then (function (resp) {
    //     Actors.getActorCredits($scope.id1)
    //       .then (function (resp){
    //         $scope.credits1 = resp.cast;
    //       })
    //     .then (function(){
    //       Actors.getActorCredits($scope.id2)
    //         .then(function(resp) {
    //           $scope.credits2 = resp.cast;
    //         })
    //     })
    //     console.log($scope.credits2)
    //   })
}



})