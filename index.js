
var button = ["red", "blue", "green", "yellow"];
var chosenColor = null;
var userChosen = null;
var gamePattern = [];
var userPattern = [];
var level = 0;

$(document).keypress(function() {
  if(gamePattern.length == 0) {
    createNewPattern();
    showSequence();
    $("h1").text(String(level));
    $(".btn").on("click", handle);
  }
});






function handle() {
  var button = $(this);
  var userColor = $(button).attr('id');
  userPattern.push(userColor);
  userChosen = userColor;
  button.addClass("pressed");
  clicked = new Audio("sounds/" + userColor + ".mp3");
  clicked.play();

  setTimeout(function(){
      console.log("lmao");
      button.removeClass("pressed");

   }, 100);

   if (checkAnswer(userPattern.length - 1)) {
     if (userPattern.length == gamePattern.length) {
       setTimeout(function(){
          console.log("lol");
          createNewPattern();
          showSequence();
          userPattern = [];

        }, 1000);
    }
   }
   else {
     var wrong = new Audio("sounds/wrong.mp3");
     wrong.play();
     $("body").addClass("game-over");
     setTimeout(function() {
       $("body").removeClass("game-over");

   }, 200);
   startOver();

}
}

function startOver() {
  level = 0;
  gamePattern = [];
  $("h1").text("Game Over, press any key to restart the game");

}
function checkAnswer(lastAnswer) {
  if (userPattern[lastAnswer] != gamePattern[lastAnswer]) {
    return false;
  }
  else {
    return true;
  }
}
function nextSequence() {
  level += 1;
  $("h1").text(String(level));
  return Math.floor(Math.random() * 4);
}

function showSequence() {
  $("#" + chosenColor).fadeOut(100).fadeIn(100);
  var sound = new Audio("sounds/" + chosenColor + ".mp3");
  sound.play();
}

function createNewPattern() {
  var color = button[nextSequence()]
  chosenColor = color;

  gamePattern.push(color);

}
