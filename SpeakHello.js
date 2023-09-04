
(function (window){

var speakWord = "Hello";
var helloSpeaker ={};
helloSpeaker.speak = function helloSpeaker(name) {
  console.log(speakWord + " " + name);
}
window.helloSpeaker = helloSpeaker;
}) (window);
