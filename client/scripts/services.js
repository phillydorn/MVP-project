angular.module('compare.services', [])

.factory('Movies', function($http) {

var findCommonMovies = function(actor1, actor2) {
  app.getCredits(app.actor1Id, app.actor2Id);

// }

// app.checkActors = function(actor1, actor2) {
//   //Will check inputted actors names against database to account for misspellings
// }

// app.compareCredits = function(credits1, credits2) {
//   var results = [];
//   _.each(credits1, function (movie1) {
//     _.each(credits2, function (movie2){
//       if (movie1.id === movie2.id) {
//         results.push(movie1);
//       }
//     })
//   })

//   return results;
// }



// app.getCredits = function(id1, id2) {
//   app.getActorCredits(id1);
//   app.actor1Credits = app.credits;
//   app.getActorCredits(id2);
//   app.actor2Credits = app.credits;
//   app.commonMovies = app.compareCredits(app.actor1Credits, app.actor2Credits);
// }

//

return {

}
})

.factory ('Actors', function ($http, $q) {
    var ids;
    var server = 'https://api.themoviedb.org/3/';
    var apiKey = 'api_key=d6065c3cd1f5ec02566e1e788df1870b';

    var getIds = function (actor1, actor2) {
      if (ids) {
        var deferred = $q.defer();
        return defered.resolve(ids);
      }
      else {
        return $q.all([
          this.fetchActorId(actor1),
          this.fetchActorId(actor2)
          ])
        .then (function(ids){
          console.log('inside', ids)
          this.ids = ids;
          return ids;
        })
      }
    }

var fetchActorId = function (actor) {
  return $http({
    method: 'GET',
    url: server+'search/person?query='+actor+'&'+apiKey
  })
  .then(function(resp) {
    return resp.data.results[0].id;
  })
}
var getActorCredits = function(id) {
  return $http({
    method: 'GET',
    url: server + 'person/' + id + '/movie_credits?' + apiKey
  })
  .then(function(resp) {
    return resp.data;
  })

}


return {
  fetchActorId : fetchActorId,
  getActorCredits: getActorCredits,
  getIds: getIds,
  ids: ids
}
})