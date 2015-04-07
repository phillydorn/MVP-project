angular.module('compare', [
  'compare.services',
  'compare.actors',
  'ngRoute'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/movies', {
      templateUrl: 'scripts/movies/movies.html',
      controller: 'movieController'
    })
    .when ('/actors', {
      templateUrl: 'scripts/actors/actors.html',
      controller: 'actorController'
    })
    .otherwise({
      redirectTo: '/actors'
    });
})



