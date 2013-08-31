$(document).ready(function(){

// Defining variables
  var ytapi = {}

  ytapi.videoList = $("#video-list");

// Functions
  ytapi.fetchApi = function(type){
    var apiLink = "http://gdata.youtube.com/feeds/api/standardfeeds/most_popular?max-results=5&v=2&alt=json";
    $.getJSON(apiLink, function(data) {
      var feed = data.feed;
      var entries = feed.entry;

      // for each entry, get its title, log it in console
      $.each(entries, function(i, data){
        console.log(data.title.$t);
      
      });
    });
  };

  ytapi.fetchApi();

});