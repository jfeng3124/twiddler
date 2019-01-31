$(document).ready(function(){

  var $tweets = $(".tweets");
  var $timeline = $('.timeline');
  

  var loadTweets = function () {
    $tweets.html('');
    var index = streams.home.length - 1;
    
    while(index >= 0){
        var date = jQuery.timeago(streams.home[index].created_at);
     
        var tweet = streams.home[index];
        var $button = $('<button class =></button>');
            $button.addClass('user-button');
            $button.text('@' + tweet.user);
        var $tweet = $('<div></div>');
            $tweet.text(tweet.message)
        var $date = $('<div></div>');
            $date.addClass('date');
            $date.html(' ' + date + '<br><br>');

            $button.appendTo($tweets);
            $tweet.appendTo($tweets);
            $date.appendTo($tweets);
        index --;
    }

    $('.user-button').click(function() {
        $timeline.html('');
        var name = $(this).text().slice(1);
        var tweet = streams.users[name];
          for(var i = 0; i < tweet.length; i++) {
            var $button = $('<button></button>');
                $button.text('@' + name);
            var $tweet = $('<div></div>');
                $tweet.text(tweet[i].message);    
            var $date = $('<div></div>');
                $date.addClass('date');
                $date.html(' ' + date + '<br><br>');

                $button.appendTo($timeline);
                $tweet.appendTo($timeline);
                $date.appendTo($timeline);    
          };
      });
  }

  loadTweets();
  $('.load-tweets').click(function () {
    loadTweets();
  }) 

 // $('.load-user-tweet').click(function(event) {
 //  console.log('click')
 //    e.preventDefault();
 //    var form = document.getElementById('user-tweet');
 //    var username = form.elements['user-name'].value;
 //    var message = form.elements['user-tweet'].value;
 //  if (streams.home.length > 7) {
 //    streams.home = streams.home.slice(streams.home.length - 7);
 //  }
 //  writeTweet(message);
 // })

  // $('.load-user-tweet').click(function () {
  //   $tweets.html('');
  //   console.log('click')
  //   var form = document.getElementById('user-tweet');
  //   var userName = form.elements['user-name'].value;
  //   var userTweet = form.elements['user-tweet'].value;
  //   var $button = $('<button></button>');
  //       $button.text = ('@' + userName);
  //   var $tweet = $('<div></div>');
  //       $tweet.text(userTweet);
  //   var $date = $('<div></div>');
  //       $date.addClass('date');
  //       $date.html(' ' + date + '<br><br>');  

  //   $button.appendTo($tweets);
  //   $tweet.appendTo($tweets);
  //   $date.appendTo($tweets);
  // });
});













