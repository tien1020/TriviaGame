
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


  $("#questions").show();
  $("#submit-button").show();
  timeId = setInterval(intervalId, 1000);
  timer();
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
  $("#rightAnswer").text("The correct answer is: " + rightAnswer);

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
}
  



$("#answers").on("click",".option", function () {
console.log(this);

userPick = $(this).data("dataIndex");

questionAnswers[index].rightAnswer;

  if ($("dataIndex").val() != $("dataRightAnswer").val()) {

    $("#answers").text("Wrong Answer!");
    incorrectAnswers++;

  }
  else if ($("dataIndex").val() === $("dataRightAnswer").val()) {
    $("#answers").text("Correct!!!");
    correctAnswers++;

  }
  $("#question").hide();
  displayResults();
  stopTimer();
  resetGame();

  return questionAnswers;

});








// $("#next-question").on("click", nextQuestion);
// function nextQuestion() {
//   currentQuestion (); 
//     nextQuestion = setInterval(currentQuestion, 1000 * 30);

// }



  //   function currentQuestion(){
  //     randomQuestion++;
  //     // updateScore();
  //     showTrivia (); 
  // }



  // function selectQuestion() {
  //   if (++currentQuestion >= playQuestions.length) {
  //       endGame();
  //       return;
  //   // }

    // var questionObject = playQuestions[currentQuestion];
    // question.innerHTML = questionObject.question;

    // questionImage.src = questionObject.image_src;


    // resetTimer();











