
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
      stopTimer();
      checkAnswer();
      displayResults();
    }
    else if (numberSeconds == 0) {
      stopTimer();
      stopGame();
      outOfTime(questionCount)
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
    $("#submit-button").hide();

  }

  // function startGame() {
  //   gameId = setInterval(randomQuestion, 30000);
  //   startTimer();
  //   showTrivia();
  // }

  function resetTimer() {
    numberSeconds = 30;
    $("#timer").text(numberSeconds);
    timer();
  }


  $("#submit-button").on("click", submit);

  function submit() {

    $("#question").hide();
    $("#submit-button").hide();
    
    displayResults();
    stopTimer();
  }

  function displayResults (){
    $("#results").text("You answered correctly "+ correctAnswers + "questions out of 4");
    $("#rightAnswer").text("The right answer is: " + randomQuestion.rightAnswer);

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
    $("#question").html(randomQuestion.question);

    for (var i = 0; i < randomQuestion.length; i++) {
      $("#question").html(randomQuestion.question);

      $("#answers").html(randomQuestion.answers[i] + "<br><br>")

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

    // for (var i = 0; i < buttons.length; ++i) {
    //     var button = buttons[i];
    //     if (i >= questionObject.answers.length) {
    //         button.style.display = "none";
    //         continue;
    //     } else {
    //         button.style.display = "inline-block";
    //     }
    //     button.innerHTML = questionObject.answers[i];
    // }
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

function checkTimerEnd(seconds, intervalId) {
  if (numberSeconds <= 0) {
      clearTimerInterval();
      ++incorrectAnswers;
      selectQuestion();
  }
}

