
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
// var index = 0;
var questionCount = 0;
var timeId;
var numberSeconds = 10;
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
    unAnswered++;
    questionCount++;
    stopTimer();
    $("#answers").text(" Out of Times - Unanswers: " + unAnswered);
    displayResults();
    setTimeout(function () {
      nextQuestion();
      resetTimer();
    }, 5000);
  }

}


$("#start-button").on("click", startGame);

function startGame() {
  questionCount =0;
  resetTimer();
correctAnswers =0;
incorrectAnswers =0;
unAnswered = 0;
$("#endGame").empty();
$("#results").empty();
$("#rightAnswer").empty();
  timer();
  showTrivia();

}



function stopTimer() {
  clearInterval(intervalId);

  }



function resetTimer() {
  numberSeconds = 10;
  timer();
  
}







function displayResults() {

  $("#results").text("You answered correctly " + correctAnswers + " questions out of 4");
  // $("#wrongAnswer").text("You answered incorrectly " + incorrectAnswers + " questions out of 4");
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
      stopTimer();
      $("#endGame").text("End Game!")

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
        $("#answers").append("Correct!!!");
        $("#answers").prepend('<img src="https://media.giphy.com/media/lnlAifQdenMxW/giphy.gif"/>');

        correctAnswers++;
        displayResults();
        stopTimer();
    questionCount++;
  }


  else {
    $("#answers").append("Wrong Answer!");
    $("#answers").prepend('<img src="https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif"/>');

    incorrectAnswers++;
    displayResults();
    stopTimer();
    console.log("the third");
    questionCount++;

  }

 setTimeout(nextQuestion, 3000);

});

















