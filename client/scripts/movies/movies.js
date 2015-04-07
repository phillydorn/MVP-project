angular.module('compare.movies', [])

.controller('movieController', function($scope, Movies, Actors) {
  $scope.data = {};
  $scope.findCommonMovies = function() {
    Movies.findCommonMovies()
    .then(function(movies){
      $scope.data.movies = movies;
    })
  }

})