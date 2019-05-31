
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var index = 0;
var questionCount = 0;
var timeId;
var numberSeconds = 30;
var intervalId;
var playQuestions;
var currentQuestion;
var userPick;


var questionAnswers = [{
  question: "What is the seventh planet from the sun?",
  answers: ["1. Neptune", "2. Mercury", "3. Earth", "4. Uranus"],
  rightAnswer: "4. Uranus",


}, {
  question: "What is the world's longest river?",
  answers: ["1. Amazon", "2. Nile", "3. Mekong", "4. Missouri"],
  rightAnswer: 0,
  animateImage: "https://media3.giphy.com/media/pYvP6Bf0Uhtm0/200w.webp?cid=790b76115ce7298e785a396d7364905b&rid=200w.webp",
}, {
  question: "What is the diameter of Earth?",
  answers: ["1. 12.000 miles ", "2. 10.000 miles", "3. 8.000 miles", "4. 15.000 miles"],
  rightAnswer: 2,
  animateImage: "https://media3.giphy.com/media/pYvP6Bf0Uhtm0/200w.webp?cid=790b76115ce7298e785a396d7364905b&rid=200w.webp",
}, {
  question: "May Queen, Wisley Crab, Foxwhelps and Lane's Prince Albert are all species of what?",
  answers: ["1. Oranges", "2. Apples", "3. Pinnapples", "4. Strawberries"],
  rightAnswer: 1,
}];






function timer() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000)
}

function decrement() {
  numberSeconds--;
  $("#timer").html("<h2>" + numberSeconds + "seconds left</h2>");
  if (numberSeconds === 0) {
    $("#questions").hide();
    $("#submit-button").hide();
    stopTimer();
    displayResults();
  }
  else if (numberSeconds == 0) {
    stopTimer();
    stopGame();
    outOfTime(questionCount)
    displayResults();
    setTimeout(function () {
      nextQuestion();
      resetTimer();
    }, 5000);
    return;

  }
}


$("#start-button").on("click", startTimer);
function startTimer() {


  // $("#questions").show();
  timeId = setInterval(intervalId, 1000);
  timer();
  resetGame();
  showTrivia();

}



function stopTimer() {
  clearInterval(intervalId);
  $("#questions").hide();

}


function resetTimer() {
  numberSeconds = 30;
  $("#timer").text(numberSeconds);
  timer();
  
}





function displayResults() {

  $("#results").text("You answered correctly " + correctAnswers + " questions out of 4");
  $("#rightAnswer").text("The correct answer is: " + questionAnswers[index].rightAnswer);
console.log("this should be the answer:", rightAnswer);
}

function resetGame() {
  $("#questions").hide();
  $("#results").hide();
  resetTimer();

}



// var indexQuestion = questionAnswer
// console.log(indexQuestion);


// $("#submit-button").on("click", submit);

// function submit() {
//   $("#question").hide();
//   $("#submit-button").hide();
//   displayResults();
// }

function showTrivia() {
  $("#question").html(questionAnswers[index].question);
  console.log(questionAnswers)
  for (var i = 0; i < questionAnswers[index].answers.length; i++) {
    var newDiv = $("<div>");
    newDiv.html(questionAnswers[index].answers[i]);
    newDiv.attr("dataIndex",i);
    newDiv.attr("dataRightAnswer",questionAnswers[index].rightAnswer);
    newDiv.addClass("option");
    $("#answers").append(newDiv);
  }





$("#answers").on("click",".option", function (e) {



var userPick = $(this).attr("dataIndex");
console.log(this);

questionAnswers[index].rightAnswer;

  // if ($("dataIndex").val() != questionAnswers[index].rightAnswer) {
  //   $("#answers").text("Wrong Answer!");
  //   incorrectAnswers++;

  // }
  // else 
  if (userPick === questionAnswers[index].rightAnswer) {
    console.log("I am here");
    $("#answers").text("Correct!!!");
    correctAnswers++;

  }
  else {
    $("#answers").text("Wrong Answer!");
    incorrectAnswers++;
  }
  console.log("here?" +$("dataIndex").val());
  $("#question").hide();
  displayResults();
  stopTimer();
  resetGame();

  return questionAnswers;

});
}

















