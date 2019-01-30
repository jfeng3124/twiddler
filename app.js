$(document).ready(function(){

  var $tweets = $(".tweets");
  var $timeline = $('.timeline');
  
  

  $('.button').on('click', function () {
      var index = streams.home.length - 1;
      var date = streams.home[index].created_at + ''
      var dateStr = jQuery.timeago(date.split(' ').slice(1, 5).join(' '));

      $tweets.html('');

      while(index >= 0){
        var tweet = streams.home[index];
        var $button = $('<button></button>');
            $button.addClass('user-button');
            $button.text('@' + tweet.user);
            $button.appendTo($tweets);
        var $tweet = $('<div></div>');
            $tweet.html(tweet.message)
            $tweet.appendTo($tweets);
        var $date = $('<div></div>');
            $date.addClass('date');
            $date.html(dateStr + '<br><br>');
            $date.appendTo($tweets);
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
                $tweet.html(tweet[i].message)
                $tweet.appendTo($timeline);
            var $date = $('<div></div>');
                $date.addClass('date');
                $date.html(dateStr + '<br><br>');
                $date.appendTo($timeline);    
          }
      })
  })

});













