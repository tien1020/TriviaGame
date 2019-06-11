
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
// var index = 0;
var questionCount = 0;
var timeId;
var numberSeconds = 30;
var intervalId;
var playQuestions;
var currentQuestion;
var userPick;
var gameId;

var questionAnswers = [{
  question: "What is the seventh planet from the sun?",
  answers: ["1. Neptune", "2. Mercury", "3. Earth", "4. Uranus"],
  rightAnswer: 3,


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
    stopTimer();
    // increment unanswered questions 
    // wait
    // get a new question
    displayResults();
    setTimeout(function () {
      nextQuestion();
      resetTimer();
    }, 5000);
  }
  // else if (numberSeconds == 0) {
  //   stopTimer();
    
   
    

  // }
}


$("#start-button").on("click", startGame);

function startGame() {
  questionCount =0;
  resetTimer();
correctAnswers =0;
  timer();
  showTrivia();
  // gameId = setInterval(nextQuestion, 40000);

}



function stopTimer() {
  clearInterval(intervalId);
  // resetTimer();
  // if(questionCount < questionAnswers.length - 1) {
      // setTimeout(startGame, 5000);
      // setTimeout(showTrivia, 5000);
  }

// resetTimer();


function resetTimer() {
  numberSeconds = 30;
  timer();
  
}

// function startGame() {
//   gameId = setInterval(nextQuestion, 40000);
//   startTimer();
//   showTrivia();
// }





function displayResults() {

  $("#results").text("You answered correctly " + correctAnswers + " questions out of 4");
  $("#rightAnswer").text("The correct answer is: " + questionAnswers[questionCount].answers[questionAnswers[questionCount].rightAnswer]);
console.log("this should be the answer:", rightAnswer);
}









function nextQuestion() {
  
  if (questionCount < questionAnswers.length) {
    $("#question").empty();
    
    $("#results").empty();
    $("#rightAnswer").empty();


      showTrivia(questionAnswers[questionCount]);
      resetTimer();
  }
  else {
      questionCount = 0;
      // endOfGame();
      stopTimer();
      console.log("end of array");
  }

}



function showTrivia() {
  $("#question").html(questionAnswers[questionCount].question);
  console.log(questionAnswers)
  $("#answers").empty();
  for (var i = 0; i < questionAnswers[questionCount].answers.length; i++) {
    var newDiv = $("<div>");
    newDiv.html(questionAnswers[questionCount].answers[i]);
    newDiv.attr("dataIndex",i);
    newDiv.attr("dataRightAnswer",questionAnswers[questionCount].rightAnswer);
    newDiv.addClass("option");
    $("#answers").append(newDiv);
  }
}




$("#answers").on("click",".option", function (e) {



  if ($(this).attr('dataindex') === $(this).attr('datarightanswer')) {
    console.log('index',$(this).attr('dataindex'));
        $("#answers").text("Correct!!!");
        correctAnswers++;
        displayResults();
        stopTimer();
    
    questionCount++;
  }
  else {
    $("#answers").text("Wrong Answer!");
    incorrectAnswers++;
    displayResults();
    stopTimer();
    
    questionCount++;

  }

 setTimeout(nextQuestion, 5000);
// checkGameEnd();

});

















