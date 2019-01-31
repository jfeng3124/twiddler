$(document).ready(function(){

  // var $tweets = $(".tweets");
  // var $timeline = $('.timeline');
  

  var loadTweets = function (user) {
    $('.stream').empty();

    if (!user) {
      streams.newTweet = 0;
    }

    

    var allTweets = streams.home.slice();
    if (users.includes(user) || user === 'visitor') {

      allTweets = allTweets.filter(function(tweet) {
        return tweet.user === user;
      });
    }

    var index = allTweets.length - 1; 
    while(index >= 0){
      
        var tweet = allTweets[index];
        var message = tweet.message;
        var date = jQuery.timeago(tweet.created_at);
        var $tweet = (`div class = ${tweet.user}> @${tweet.user} </div><br>
                       ${message}<br>
                       ${date}<br><br>`);


            $tweet.appendTo($tweets);

        index --;
    }
    $('.tweets').scrollTop();

  }

  loadTweets();

  $('.load-tweets').click(function () {
    loadTweets();
  });

  $('.main-container')click('div', function() {
    var clicked = $(this).attr('class');
    if (users.includes(clicked)) {
      loadTweets(clicked);
    }
  })

  $('.load-user-tweet')click(function(message) {
    var message = $('.user-tweet');
    writeTweet(message.val());
    loadTweets();
  })

 
});


//old code

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










