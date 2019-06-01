
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
  showTrivia();

}



function stopTimer() {
  clearInterval(intervalId);
  resetTimer();
  if(questionCount < questionAnswers.length - 1) {
      setTimeout(startTimer, 2000);
      setTimeout(showTrivia, 3000);
  }
}
resetTimer();


function resetTimer() {
  numberSeconds = 30;
  $("#timer").text(numberSeconds);
  timer();
  
}

function startGame() {
  gameId = setInterval(nextQuestion, 30000);
  startTimer();
  showTrivia(questionCount);
}





function displayResults() {

  $("#results").text("You answered correctly " + correctAnswers + " questions out of 4");
  $("#rightAnswer").text("The correct answer is: " + questionAnswers[index].rightAnswer);
console.log("this should be the answer:", rightAnswer);
}

// function resetGame() {
//   $("#questions").empty();
//   $("#results").empty();
//   $("#rightAnswer").empty();
//   stopTimer();
//   resetTimer();

// }





//function answeredCorrectly() {
//   correctAnswer++
//   say "you got it right"

//   if currentQUestion=== questionAnswers.length -1
//   setTimeout()
//   continue to next question
// }
//   else currentQUestion=== questionAnswers.length
// display end results



// function answeredIncorrectly(){
  // incorrectAnswers++
  // say "wrong"
  // if currentQUestion=== questionAnswers.length -1
  //   setTimeout()
  //   continue to next question
//   else currentQUestion=== questionAnswers.length
// display end results

// }

function nextQuestion() {
    
  questionCount++;
  if (questionCount < questionAnswers.length) {
      showTrivia(questionCount);
  }
  else {
      questionCount = 0;
      endOfGame();
      stopTimer();
      stopGame();
      console.log("end of array");
  }

}



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
    // timer();
    // stopTimer();
    // startGame();
    // createResult(questionCount, newDiv);

  }
}




$("#answers").on("click",".option", function (e) {



  if ($(this).attr('dataindex') === $(this).attr('datarightanswer')) {
    console.log('index',$(this).attr('dataindex'));
        $("#answers").text("Correct!!!");
        displayResults();
        stopTimer();
    correctAnswers++;
    questionCount++;
  }
  else {
    $("#answers").text("Wrong Answer!");
    displayResults();
    stopTimer();
    incorrectAnswers++;
    questionCount++;

  }
//   setTimeout(function () {
//     nextQuestion();
//     timer.resetTimer();
// }, 5000)
 
checkGameEnd();

});

function checkGameEnd() {
  if(questionCount === questionAnswers.length) {
      $("timer").hide();
      displayResults();
      questionCount = 0;

          resetResults();
          startGame();
      }
  }


function resetResults() {
  correctAnswers = 0;
  incorrectAnswers = 0;
  unanswered = 0;
}
















