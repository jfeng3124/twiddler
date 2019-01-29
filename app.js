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
          $tweet.html('@' + tweet.user + ': ' + tweet.message + '<br> --- ' + dateStr)
          $tweet.appendTo($tweets);
          index -= 1;
        }
    
  })
    

});

