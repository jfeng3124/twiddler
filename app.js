$(document).ready(function(){

//function to make tweets
  var loadTweets = function (user) {
    $('.stream').html('');
  
    var allTweets = streams.home.slice();
    if (users.includes(user) || user === 'visitor') {
      allTweets = allTweets.filter(function(tweet) {
        return tweet.user === user;
      });
    };

    var index = allTweets.length - 1; 
    while (index >= 0) {
        var tweet = allTweets[index];
        var tweetMessage = tweet.message;
        var date = jQuery.timeago(tweet.created_at);
        var timelineTweets = (`<li><span class ="${tweet.user}">${streams.avatars[tweet.user]}
                              <strong>${streams.names[tweet.user]}</strong> @${tweet.user}<br></span>
                              ${tweetMessage}<br><div class = 'time'>${date}</div><br></li>`);
        $('.stream').append(timelineTweets);

        index --;
    };
    $('.tweets').scrollTop();
  };

//initial tweets
  loadTweets();

//handlers
  $('.load-tweets').click(function () {
    loadTweets();
  });

  $('.main-container').on('click','span', function() {
    let clicked = $(this).attr('class');
    if (users.includes(clicked) || clicked === 'visitor') {
      loadTweets(clicked);
    }
  });

  $('.input-tweet').keypress(function(event) {
    if (event.key === 'Enter') {
      let message = $(this).slice();
      if (message.val().length > 0) {
        writeTweet(message.val());
      } else {
        alert("You didn't write anything! Please enter a tweet.")
      }
    loadTweets();
    message.val(''); 
    }    
  });

  $('.submit').click(function(event) {
      let message = $('.input-tweet').slice();
      if (message.val().length > 0) {
        writeTweet(message.val());
      } else {
        alert("You didn't write anything! Please enter a tweet.")
      }
    loadTweets();
    message.val('');  
  });  


  $('#title').on('click', function() {
    loadTweets();
  });
});


//old code
// var $tweets = $(".tweets");
// var $timeline = $('.timeline');
// var loadTweets = function () {

//     $tweets.html('');
//     var index = streams.home.length - 1;
//     var date = streams.home[index].created_at + '';
//     var dateStr = jQuery.timeago(date.split(' ').slice(1, 5).join(' '));
//       while(index >= 0){
//         var tweet = streams.home[index];
//         var $button = $('<button></button>');
//             $button.addClass('user-button');
//             $button.text('@' + tweet.user);
//             $button.appendTo($tweets);
//         var $tweet = $('<div></div>');
//             $tweet.text(tweet.message)
//             $tweet.appendTo($tweets);
//         var $date = $('<div></div>');
//             $date.addClass('date');
//             $date.html(' ' + dateStr + '<br><br>');
//             $date.appendTo($tweets);
//         index --;

    // $('.user-button').click(function() {
    //     $timeline.html('');
    //     var name = $(this).text().slice(1);
    //     var tweet = streams.users[name];
    //       for(var i = 0; i < tweet.length; i++) {
    //         var $button = $('<button></button>');
    //             $button.text('@' + name);
    //         var $tweet = $('<div></div>');
    //             $tweet.text(tweet[i].message);    
    //         var $date = $('<div></div>');
    //             $date.addClass('date');
    //             $date.html(' ' + date + '<br><br>');

    //             $button.appendTo($timeline);
    //             $tweet.appendTo($timeline);
    //             $date.appendTo($timeline);    
    //       };
    //   });
  //}

  //   loadTweets();
  //    $('.load-tweets').click(function () {
  //   loadTweets();
  // });










