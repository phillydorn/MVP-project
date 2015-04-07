angular.module('compare.services', [])

.factory('Movies', function($http, $q) {

  var findCommonMovies = function(Actors) {
    console.log('1');
    return this.getCredits(Actors);
  }


  var getCredits = function(Actors) {
    console.log('2');

    return $q.all([
      this.getActorCredits(Actors.ids[0]),
      this.getActorCredits(Actors.ids[1])
      ])
    .then (function (credits) {
      var results = [];
      credits[0].forEach(function (movie1) {
        credits[1].forEach(function (movie2){
          if (movie1.id === movie2.id) {
            results.push(movie1);
          }
        })
      })
      return results;
    });
  }

  var getActorCredits = function(id) {
    console.log('3');

    return $http({
      method: 'GET',
      url: server + 'person/' + id + '/movie_credits?' + apiKey
    })
    .then(function(resp) {
      return resp.data;
    })
  }

  return {
    getActorCredits: getActorCredits,
    getCredits: getCredits,
    findCommonMovies: findCommonMovies

  }
})

.factory ('Actors', function ($http, $q) {
  var ids;
  var server = 'https://api.themoviedb.org/3/';
  var apiKey = 'api_key=d6065c3cd1f5ec02566e1e788df1870b';
  var that = this;
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
        that.ids = ids;
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

 var findCommonMovies = function(id1, id2) {
    console.log('1');
    return this.getCredits(id1, id2);
  }


  var getCredits = function(id1, id2) {
    console.log('2');

    return $q.all([
      this.getActorCredits(id1),
      this.getActorCredits(id2)
      ])
    .then (function (credits) {
      var results = [];
      angular.forEach(credits[0], function (movie1) {
        angular.forEach(credits[1],function (movie2){
          if (movie1.id === movie2.id) {
            results.push(movie1);
          }
        })
      })
      console.log('results', results)
      return results[5];
    });
  }

  var getActorCredits = function(id) {
    console.log('3');

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
    getIds: getIds,
    ids: ids,
    getActorCredits: getActorCredits,
    getCredits: getCredits,
    findCommonMovies: findCommonMovies
  }
})