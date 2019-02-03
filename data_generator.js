/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {};
streams.home = [];
streams.users = {};
streams.names = {};
streams.avatars = {};

streams.avatars.sailormoon = '<img src="assets/moon.png" width="60" alt="Sailor Moon Profile Picture">';
streams.avatars.sailormercury = '<img src="assets/mercury.png" width="60" alt="Sailor Mercury Profile Picture">';
streams.avatars.sailorvenus = '<img src="assets/venus.png" width="60" alt="Sailor Venus Profile Picture">';
streams.avatars.sailormars = '<img src="assets/mars.png" width="60" alt="Sailor Mars Profile Picture">';
streams.avatars.sailorjupiter = '<img src="assets/jupiter.png" width="60" alt="Sailor Jupiter Profile Picture">';
streams.avatars.sailoruranus = '<img src="assets/uranus.png" width="60" alt="Sailor Uranus Profile Picture">';
streams.avatars.sailorneptune = '<img src="assets/neptune.png" width="60" alt="Sailor Neptune Profile Picture">';
streams.avatars.sailorsaturn = '<img src="assets/saturn.png" width="60" alt="Sailor Saturn Profile Picture">';
streams.avatars.sailorpluto = '<img src="assets/pluto.png" width="60" alt="Sailor Pluto Profile Picture">';
streams.avatars.visitor = '<img src="assets/guest.png" width="60" alt="Guest Profile Picture">';

streams.names.sailormoon = 'Usagi Tsukino';
streams.names.sailormercury = 'Ami Mizuno';
streams.names.sailorvenus = 'Minako Aino';
streams.names.sailormars = 'Rei Hino';
streams.names.sailorjupiter = 'Makoto Kino';
streams.names.sailoruranus = 'Haruka Tenou';
streams.names.sailorneptune = 'Michiru Kaioh';
streams.names.sailorsaturn = 'Hotaru Tomoe';
streams.names.sailorpluto = 'Setsuna Meiou';
streams.names.visitor = 'Jia Feng';

streams.users.sailormoon = [];
streams.users.sailormercury = [];
streams.users.sailorvenus = [];
streams.users.sailormars = [];
streams.users.sailorjupiter = [];
streams.users.sailoruranus = [];
streams.users.sailorneptune = [];
streams.users.sailorsaturn = [];
streams.users.sailorpluto = [];

window.users = Object.keys(streams.users);
window.visitor = [];

// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet.user;
  if (username === 'visitor') {
    visitor.push(newTweet)
  } else {
    streams.users[username].push(newTweet);
  } 
  streams.home.push(newTweet);
  visitor.push(newTweet);
};

// utility function
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how I', 'completely', 'nearly', 'productively', 'efficiently', 'last night I', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only I know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);
  tweet.message = randomMessage();
  tweet.created_at = new Date();
  addTweet(tweet);
};

for(var i = 0; i < 10; i++){
  generateRandomTweet();
}

var getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()* max - min + 1) + min;
}

var scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, getRandomIntInclusive(5, 10) * 1000);
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){
  // if(!visitor){
  //   visitor = true;
    // streams.users.visitor = [];
    // users.push('visitor')
    //throw new Error('set the global visitor property!');
  //}
  var tweet = {};
  tweet.user = "visitor";
  tweet.message = message;
  tweet.created_at = new Date();
  addTweet(tweet);
};
