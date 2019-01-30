$(document).ready(function(){
        // var $tweets = $(".tweets");
        // $tweets.html('');

        // var index = streams.home.length - 1;
        // while(index >= 0){
        //   var tweet = streams.home[index];
        //   var $tweet = $('<div></div>');
        //   $tweet.text('@' + tweet.user + ': ' + tweet.message);
        //   $tweet.appendTo($section);
        //   index -= 1;
        // }
 
//create a function that pulls out individual elements from the streams.home array and
//appends them to our ".tweets" div.

  // var newT = streams.home[Math.floor(Math.random()*streams.home.length)];
  //     newT.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at.toLocaleString())
  //     newT.appendTo($tweets);
  var $tweets = $(".tweets");
  var $timeline = $('.timeline');

  var index = streams.home.length - 1;
  var date = streams.home[index].created_at + ''
  var dateStr = jQuery.timeago(date.split(' ').slice(1, 5).join(' '));
  
  
  $('.button').on('click', function () {
      
    $tweets.html('');
    while(index >= 0){
      var tweet = streams.home[index];
      var $button = $('<button></button>');
      var $tweet = $('<div></div>');
      $button.addClass('user-button');
      $button.text('@' + tweet.user);
      $tweet.html(tweet.message + '<br> --- ' + dateStr + '<br>' + ' <br>')
      $button.appendTo($tweets);
      $tweet.appendTo($tweets);
    index --;
    }

    $('.user-button').on("click", function() {
        
      $timeline.html('');
      var name = $(this).text();
      name = name.slice(1);;
      var tweet = streams.users[name];

      for (var i = 0; i < tweet.length; i++) {
        var $button = $('<button></button>');
        var $tweet = $('<div></div>');
        $button.text('@' + name);
        $tweet.html(tweet[i].message + '<br> --- ' + dateStr  + '<br>' + ' <br>')
        $button.appendTo($timeline);
        $tweet.appendTo($timeline);
      }
  })
      // var name = tweet.user
      // console.log(name);


// tweet is not defined
//     $('.user-button').on('click', function(){
//       // var name = streams.home[index].user
//       console.log(name);
//       var $userTimeline = [];
//       var $usernames = $('<div></div>');
//       for(var i = 0; i < timelineStorage.length; i++) {
//         if(timelineStorage[i].includes(name)){
//           $userTimeline.push(timelineStorage[i]);
//         }
//       }
//       $userTimeline.appendTo($timeline)
})

});

//we want to be able to click on a user button and have it check the username on the button 
//and all the existing tweets,
//if it matches, return those users and their matching tweets
//we can use a for loop to go through the unordered list of existing tweets
//and if (name === username button), push the tweet into a new array
//we first need to somehow create the unordered list of existing tweets











