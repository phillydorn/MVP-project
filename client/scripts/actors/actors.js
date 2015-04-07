angular.module('compare.actors', [])

.controller('actorController', function($scope, $q, $location, Actors) {

  $scope.data = {};
  $scope.names = {};
  $scope.id1=0;
  $scope.id2=0;

  $scope.compareMovies = function() {
    // $scope.ids = $scope.getIds();
    $scope.getIds()
    .then (function () {
      $scope.findCommonMovies();
    })
    // .then(function () {
    //   $location.path ('/movies')

    // })

    // $scope.getCredits();
  }


  $scope.getIds = function() {
    return Actors.getIds($scope.names.actor1, $scope.names.actor2)
    .then (function (ids) {
      $scope.id1 = ids[0];
      $scope.id2 = ids[1];
      return ids;
    })
    .then(function (ids) {
      return Actors.loadPics(ids)
    })
    .then (function (pics) {
      $scope.pic1 = 'http://image.tmdb.org/t/p/original' + pics[0];
      $scope.pic2 = 'http://image.tmdb.org/t/p/original' + pics[1];
    })
    ;

}

 $scope.findCommonMovies = function() {
     Actors.findCommonMovies($scope.id1, $scope.id2)
    .then(function(movies){
      $scope.data.movies = movies;
    })
  }


})