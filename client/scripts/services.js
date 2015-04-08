angular.module('compare.services', [])

.factory ('Actors', function ($http, $q) {

  var server = 'https://api.themoviedb.org/3/';
  var apiKey = 'api_key=d6065c3cd1f5ec02566e1e788df1870b';
  var that = this;
  var id;


  var getInfo = function (actor) {
    return $http({
      method: 'GET',
      url: server+'search/person?query='+actor+'&'+apiKey
    })
    .then(function(resp) {
      id = resp.data.results[0].id;
      console.log(id)
    })
  }

  var showInfo = function (){
    return id;
  }

  return {
    getInfo: getInfo,
    showInfo: showInfo
  }
})