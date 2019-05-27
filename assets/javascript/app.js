
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


var questionAnswers = [{
  question: "What is the seventh planet from the sun?",
  answers: ["1. Neptune", "2. Mercury", "3. Earth", "4. Uranus"],
  rightAnswer: "4. Uranus",

}, {
  question: "What is the world's longest river?",
  answers: ["1. Amazon", "2. Nile", "3. Mekong", "4. Missouri"],
  rightAnswer: "1. Amazon",
  animateImage: "https://media3.giphy.com/media/pYvP6Bf0Uhtm0/200w.webp?cid=790b76115ce7298e785a396d7364905b&rid=200w.webp",
}, {
  question: "What is the diameter of Earth?",
  answers: ["1. 12.000 miles ", "2. 10.000 miles", "3. 8.000 miles", "4. 15.000 miles"],
  rightAnswer: "3. 8000 miles",
  animateImage: "https://media3.giphy.com/media/pYvP6Bf0Uhtm0/200w.webp?cid=790b76115ce7298e785a396d7364905b&rid=200w.webp",
}, {
  question: "May Queen, Wisley Crab, Foxwhelps and Lane's Prince Albert are all species of what?",
  answers: ["1. Oranges", "2. Apples", "3. Pinnapples", "4. Strawberries"],
  rightAnswer: "2. Apples",
}];






function timer() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000)}

  function decrement() {
    numberSeconds--;
    $("#timer").html("<h2>" + numberSeconds + "seconds left</h2>");
    if (numberSeconds === 0) {
      $("#questions").hide();
      $("#submit-button").hide();
      stop();
      submitAnswers();
      displayResults();
      
    }
    // else if (numberSeconds == 0) {
    //   stopTimer();
    //   stopGame();
    //   outOfTime(questionCount)
    //   setTimeout(function () {
    //     nextQuestion();
    //     resetTimer();
    //   }, 5000);
    //   return;

    // }
  }
  

  $("#start-button").on("click", startTimer);
  function startTimer() {
    

    $("#questions").show();
    $("#submit-button").show();
    timeId = setInterval(intervalId, 1000);
    timer();


    document.getElementById("questions");

  }



  function stopTimer() {
    clearInterval(intervalId);
    $("#questions").hide();
    $("#submit-button").hide();

  }

  function startGame() {
    gameId = setInterval(nextQuestion, 30000);
    startTimer();
    renderQuestion(questionCount);
  }

  function resetTimer() {
    numberSeconds = 30;
    $("#timer").text(numberSeconds);
    timer();
  }


  $("#submit-button").on("click", submit);

  function submit() {

    $("#question").hide();
    $("#submit-button").hide();
    submitAnswers();
    displayResults();
    stop();
  }

  function displayResults (){
    $("#results").text("You answered correctly"+ correctAnswers + "questions out of 4");
  }

  function reset (){
  correctAnswers = 0;
  $("#questions").hide();
  $("#submit-button").hide();
  $("#results").hide();
  }


  var randomIndex = Math.floor(Math.random()*questionAnswers.length); 
  // var newArray = array.slice();
  var randomQuestion = questionAnswers[randomIndex];
  console.log(randomQuestion);
  // newArray[i]=randomQuestion;

  function showTrivia() {
    // $("#question").html(questionAnswers[index].question);
    for (var i = 0; i < randomQuestion.length; i++) {
      // $("#answers").append(questionAnswers[index].answers[i] + "<br><br>")
    }
    return randomQuestion;

    // if (questionCount < questionAnswers.length) {
    //   renderQuestion(questionCount);
    // }
    // else {
    //   questionCount = 0;
    //   endOfGame();
    //   stopTimer();
    //   stopGame();
    //   console.log("end of array");
    }
  // showTrivia();

  function setupQuestions(){
    correctAnswers = 0;
    incorrectAnswers = 0;
    playQuestions = showTrivia(question);
    currentQuestion = -1;
    selectQuestion();
  }

  function selectQuestion() {
    if (++currentQuestion >= playQuestions.length) {
        endGame();
        return;
    }

    var questionObject = playQuestions[currentQuestion];
    question.innerHTML = questionObject.question;

    questionImage.src = questionObject.image_src;

    for (var i = 0; i < buttons.length; ++i) {
        var button = buttons[i];
        if (i >= questionObject.answers.length) {
            button.style.display = "none";
            continue;
        } else {
            button.style.display = "inline-block";
        }
        button.innerHTML = questionObject.answers[i];
    }
    resetTimer();
}

function checkAnswer(chosenIndex) {
  var correctIndex = playQuestions[currentQuestion].correct_index;
  if (chosenIndex === correctIndex) {
      ++correctAnswers;
  } else {
      ++wrongAnswers;
  }
  selectQuestion();
}

// timer section
function timeStringFromSeconds(seconds) {
  return `${formatNumber(seconds)}`;
}

function formatNumber(number) {
  return `${number}`.padStart(2, '0');
}

function resetTimer() {
  clearTimerInterval();
  var timer = document.getElementById("timer");
  timer.innerHTML = timeStringFromSeconds(numberSeconds);
  intervalId = setInterval(() => {
      seconds -= 1;
      timer.innerHTML = timeStringFromSeconds(numberSeconds);
      checkTimerEnd(numberSeconds);
  }, 1000);
}

function endGame() {
  clearTimerInterval();
  game.style.display = "none";
  endPage.style.display = "block";
  var percentage = Math.floor(correctAnswers / playQuestions.length * 100);
  if (percentage < 50) {
      stats.innerText = `Unfortunately you got ${percentage}% correct. Try again!`;
  } else if (percentage > 50 && percentage < 100) {
      stats.innerText = `Great job! You got ${percentage}% correct. Play again to win!`;
  } else {
      stats.innerText = `Perfect score! No one knows the girls better than you.`;
  }
}

function checkTimerEnd(seconds, intervalHandle) {
  if (seconds <= 0) {
      clearTimerInterval();
      ++wrongAnswers;
      selectQuestion();
  }
}



//   function endOfGame() {
//     createTimer();
//     var mainBody = $("#main-body");
//     var result = "<h1>All done, here is how you did.</h1><h1>Correct Answers: " + correctAnswers + "</h1>";
//     result += "<h1>Incorrect Answers: " + incorrectAnswers + "</h1><h1>Unanswered: " + unAnswers + "</h1>";
//     mainBody.append(result);
//     mainBody.append("<button class='btn btn-primary btn-lg startover' id='startover'>Start Over</button>");
//     correctAnswers = 0;
//     incorrectAnswers = 0;
//     unAnswers = 0;
//     setTimeout(function () {

//       resetTimer();
//     }, 5000)
//     $("#startover").click(startGame);
//   }
//   function outOfTime(questionCount) {
//     unAnswers++;
//     console.log("unAnswered: " + unAnswers);
//     createTimer();
//     var mainBody = $("#mainbody");
//     var answer = "<p class='result-outoftime'>Out of Time!</p>"
//     mainBody.append(answer);
//     var answerIx = arrQuestionObject[questionCount].answerIndex;
//     var cortAnswer = "<p class='answers'>The Correct Answer was: " + arrQuestionObject[questionCount].answers[answerIx] + "</p>"
//     mainBody.append(cortAnswer);
//     renderImage(questionCount);
//   }

//   function createResult(questionCount, userAnswer) {
//     if (userAnswer == questionAnswers[questionCount].answerIndex) {
//       this.correctAnswers++;
//       console.log("correctAnswer: " + correctAnswers);
//       createTimer();
//       var mainBody = $("#mainbody");
//       var answer = "<p class='result-correct'>Correct!</p>"
//       mainBody.append(answer);
//       renderImage(questionCount);
//     }
//     else {
//       this.incorrectAnswers++;
//       console.log("wrongAnswer: " + this.incorrectAnswers);
//       createTimer();
//       var mainBody = $("#mainbody");
//       var answer = "<p class='result-wrong'>Nope!</p>"
//       mainBody.append(answer);
//       var answerIx = questionAnswers[questionCount].answerIndex;
//       var cortAnswer = "<p class='answers'>The Correct Answer was: " + arrQuestionObject[questionCount].answers[answerIx] + "</p>"
//       mainBody.append(cortAnswer);
//       renderImage(questionCount);
//     }
//     setTimeout(function () {
//       nextQuestion();
//       resetTimer();
//     }, 5000)
//   }

//   // function createTimer() {
//   //   var mainBody = $("#mainbody");
//   //   mainBody.html("");
//   //   mainBody.addClass("mainbody");
//   //   mainBody.html("<h3>Time Remaining: <span id='timer'></span> Seconds</h3>")
//   //   $("#timer").text(numberSeconds);
//   // }
//   function createQuestion(questionId) {
//     var mainBody = $("#mainbody");
//     var question = "<h4 class='question'>" + questionAnswers[questionId].title + "</h4>"
//     mainBody.append(question)
//   }
//   function createAnswers(questionId) {
//     var mainBody = $("#mainbody");
//     var answer = "<div class='btn-group-vertical'><button class='btn btn-default answers' value='0'>" + questionAnswers[questionId].answers[0] + "</button><button  class='btn btn-default answers' value='1'>" + questionAnswers[questionId].answers[1] + "</button><button  class='btn btn-default answers' value='2'>" + questionAnswers[questionId].answers[2] + "</button><button  class='btn btn-default answers' value='3'>" + questionAnswers[questionId].answers[3] + "</button></div>";
//     mainBody.append(answer);
//   }
//   function renderQuestion(questionCount) {
//     createTimer();
//     createQuestion(questionCount);
//     createAnswers(questionCount);
//     $(".answers").on("click", function () {
//       var answer = $(this).attr("value");
//       timer.stopTimer();
//       stopGame();
//       createResult(questionCount, answer);
//     });
//   }
// };