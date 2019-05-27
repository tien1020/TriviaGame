
var correctAnswers = 0;
var IncorrectAnswers = 0;
var unAnswered = 0;
var index = 0;
var questionCount = 0;
var timeId;
var numberSeconds = 30;
var intervalId;

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
  

  
  function startTimer() {
    $("#start-button").on("click", startTimer);

    $("#questions").show();
    $("#submit-button").show();
    timeId = setInterval(intervalId, 1000);
    timer();


    // document.getElementById("question").resetTimer();

  }



  function stopTimer() {
    clearInterval(intervalId);

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

  function submit() {
    $("#submit-button").on("click", submit);

    $("#question").hide();
    $("#submit-button").hide();
    submitAnswers();
    displayResults();
    stop();
  }



  $(document).ready(function () {
    $("#timer").hide();
    $("#btn").on('click', showTrivia.startGame);
    $(document).on('click', '.option', showTrivia);

  })

  function showTrivia() {
    $("#question").html(questionAnswers[index].question);
    for (var i = 0; i < questionAnswers[index].answers.length; i++) {
      $("#answers").append(questionAnswers[index].answers[i] + "<br><br>")
    }
    if (questionCount < questionAnswers.length) {
      renderQuestion(questionCount);
    }
    else {
      questionCount = 0;
      endOfGame();
      stopTimer();
      stopGame();
      console.log("end of array");
    }

  }
  showTrivia();

  function endOfGame() {
    createTimer();
    var mainBody = $("#main-body");
    var result = "<h1>All done, here is how you did.</h1><h1>Correct Answers: " + correctAnswers + "</h1>";
    result += "<h1>Incorrect Answers: " + incorrectAnswers + "</h1><h1>Unanswered: " + unAnswers + "</h1>";
    mainBody.append(result);
    mainBody.append("<button class='btn btn-primary btn-lg startover' id='startover'>Start Over</button>");
    correctAnswers = 0;
    incorrectAnswers = 0;
    unAnswers = 0;
    setTimeout(function () {

      resetTimer();
    }, 5000)
    $("#startover").click(startGame);
  }
  function outOfTime(questionCount) {
    unAnswers++;
    console.log("unAnswered: " + unAnswers);
    createTimer();
    var mainBody = $("#mainbody");
    var answer = "<p class='result-outoftime'>Out of Time!</p>"
    mainBody.append(answer);
    var answerIx = arrQuestionObject[questionCount].answerIndex;
    var cortAnswer = "<p class='answers'>The Correct Answer was: " + arrQuestionObject[questionCount].answers[answerIx] + "</p>"
    mainBody.append(cortAnswer);
    renderImage(questionCount);
  }

  function createResult(questionCount, userAnswer) {
    if (userAnswer == questionAnswers[questionCount].answerIndex) {
      this.correctAnswers++;
      console.log("correctAnswer: " + correctAnswers);
      createTimer();
      var mainBody = $("#mainbody");
      var answer = "<p class='result-correct'>Correct!</p>"
      mainBody.append(answer);
      renderImage(questionCount);
    }
    else {
      this.incorrectAnswers++;
      console.log("wrongAnswer: " + this.incorrectAnswers);
      createTimer();
      var mainBody = $("#mainbody");
      var answer = "<p class='result-wrong'>Nope!</p>"
      mainBody.append(answer);
      var answerIx = questionAnswers[questionCount].answerIndex;
      var cortAnswer = "<p class='answers'>The Correct Answer was: " + arrQuestionObject[questionCount].answers[answerIx] + "</p>"
      mainBody.append(cortAnswer);
      renderImage(questionCount);
    }
    setTimeout(function () {
      nextQuestion();
      resetTimer();
    }, 5000)
  }

  // function createTimer() {
  //   var mainBody = $("#mainbody");
  //   mainBody.html("");
  //   mainBody.addClass("mainbody");
  //   mainBody.html("<h3>Time Remaining: <span id='timer'></span> Seconds</h3>")
  //   $("#timer").text(numberSeconds);
  // }
  function createQuestion(questionId) {
    var mainBody = $("#mainbody");
    var question = "<h4 class='question'>" + questionAnswers[questionId].title + "</h4>"
    mainBody.append(question)
  }
  function createAnswers(questionId) {
    var mainBody = $("#mainbody");
    var answer = "<div class='btn-group-vertical'><button class='btn btn-default answers' value='0'>" + questionAnswers[questionId].answers[0] + "</button><button  class='btn btn-default answers' value='1'>" + questionAnswers[questionId].answers[1] + "</button><button  class='btn btn-default answers' value='2'>" + questionAnswers[questionId].answers[2] + "</button><button  class='btn btn-default answers' value='3'>" + questionAnswers[questionId].answers[3] + "</button></div>";
    mainBody.append(answer);
  }
  function renderQuestion(questionCount) {
    createTimer();
    createQuestion(questionCount);
    createAnswers(questionCount);
    $(".answers").on("click", function () {
      var answer = $(this).attr("value");
      timer.stopTimer();
      stopGame();
      createResult(questionCount, answer);
    });
  }
};