var app = {
  apiKey : 'api_key=d6065c3cd1f5ec02566e1e788df1870b',
  server : 'https://api.themoviedb.org/3/',
  actor1Id : null,
  actor2Id : null,
  actor1Credits: null,
  actor2Credits: null,
  actorData: null,
  credits: null,
  commonMovies : []
};

app.findCommonMovies = function(actor1, actor2) {
  app.fetchIds(actor1, actor2);
  app.getCredits(app.actor1Id, app.actor2Id);

}

app.checkActors = function(actor1, actor2) {
  //Will check inputted actors names against database to account for misspellings
}

app.compareCredits = function(credits1, credits2) {
  var results = [];
  _.each(credits1, function (movie1) {
    _.each(credits2, function (movie2){
      if (movie1.id === movie2.id) {
        results.push(movie1);
      }
    })
  })

  return results;
}

app.fetchIds = function (actor1, actor2) {
  app.fetchActorId(actor1);
  app.actor1Id = app.actorData.results[0].id;
  app.fetchActorId(actor2);
  app.actor2Id = app.actorData.results[0].id;
}


app.fetchActorId = function (actor) {
  $.ajax({
    async: false,
      url: app.server+'search/person?query='+actor+'&'+app.apiKey,
      type: 'GET',
      'content-type': 'application/json',
      success: function(data) {
        app.actorData =  data;

      }
  })
}

app.getCredits = function(id1, id2) {
  app.getActorCredits(id1);
  app.actor1Credits = app.credits;
  app.getActorCredits(id2);
  app.actor2Credits = app.credits;
  app.commonMovies = app.compareCredits(app.actor1Credits, app.actor2Credits);
}

app.getActorCredits = function(id) {
  $.ajax({
    async: false,
    url: app.server + 'person/'+id + '/movie_credits?'+app.apiKey,
    type: 'GET',
    'content-type': 'application/json',
    success: function(data) {
      app.credits = data.cast;
    }
  })
}


$(document).ready(function () {


  $('.actor-input').on('submit', function (e) {
    e.preventDefault();
    var actor1 = this.actor1.value;
    var actor2 = this.actor2.value;
    app.findCommonMovies(actor1, actor2);
  });


});