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
  
  
  $('button').on('click', function () {
      var $tweets = $(".tweets");
          $tweets.html('');
      var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          var date = streams.home[index].created_at + ''
          var dateStr = date.split(' ').splice(1, 4).join(' ');
          var $button = $('<button></button>');
              $button.addClass('user-button');
              $button.text('@' + tweet.user);
              $tweet.html(tweet.message + '<br> --- ' + dateStr)
              $button.appendTo($tweets);
              $tweet.appendTo($tweets);
          index --;
        }
      $('.user-button').on("click", function() {
      console.log('click')
      var $timeline = $('.timeline');
          $timeline.html('');
      var name = $(this).text();
          name = name.slice(1);;
      var tweet = streams.users[name]
      for(var i = 0; i < tweet.length; i++) {
        var $tweet = $('<div></div>');
            $tweet.html('@' + tweet[i].user + ': ' + tweet[i].message + '<br>' + dateStr)
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











