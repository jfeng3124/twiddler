$(document).ready(function(){

  var $tweets = $(".tweets");
  var $timeline = $('.timeline');
  
  

  $('.button').on('click', function () {
      
      $tweets.html('');
      var index = streams.home.length - 1;

        while(index >= 0){
          var tweet = streams.home[index];
          var date = streams.home[index].created_at + ''
          var dateStr = jQuery.timeago(date.split(' ').slice(1, 5).join(' '));

          var $button = $('<button></button>');
              $button.addClass('user-button');
              $button.text('@' + tweet.user);
              $button.appendTo($tweets);

          var $tweet = $('<div></div>');
              $tweet.html(`${tweet.message} <br> ---  ${dateStr} <br><br>`)
              $tweet.appendTo($tweets);
          index --;
        }

      $('.user-button').on("click", function() {
        
        $timeline.html('');

        var name = $(this).text();
            name = name.slice(1);;
        var tweet = streams.users[name];

          for(var i = 0; i < tweet.length; i++) {
            var $button = $('<button></button>');
                $button.text('@' + name);
                $button.appendTo($timeline);
            var $tweet = $('<div></div>');
                $tweet.html(`${tweet[i].message} <br> --- ${dateStr} <br><br>`)
                $tweet.appendTo($timeline);
          }
      })
  })

});













