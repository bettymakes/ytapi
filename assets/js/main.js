$(document).ready(function(){

// Defining variables
  var ytapi = {}

  ytapi.videoList = $("#video-list");

// Functions
  ytapi.fetchApi = function(){
    var apiLink = "http://gdata.youtube.com/feeds/api/standardfeeds/most_popular?max-results=5&v=2&alt=json";
    $.getJSON(apiLink, function(data) {
      var feed = data.feed;
      var entries = feed.entry;
      console.log(entries);
    });
  };

  ytapi.fetchApi();

});