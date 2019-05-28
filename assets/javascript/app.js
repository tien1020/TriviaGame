
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
  rightAnswer: answers[3],

}, {
  question: "What is the world's longest river?",
  answers: ["1. Amazon", "2. Nile", "3. Mekong", "4. Missouri"],
  rightAnswer: answers[0],
  animateImage: "https://media3.giphy.com/media/pYvP6Bf0Uhtm0/200w.webp?cid=790b76115ce7298e785a396d7364905b&rid=200w.webp",
}, {
  question: "What is the diameter of Earth?",
  answers: ["1. 12.000 miles ", "2. 10.000 miles", "3. 8.000 miles", "4. 15.000 miles"],
  rightAnswer: answers[2],
  animateImage: "https://media3.giphy.com/media/pYvP6Bf0Uhtm0/200w.webp?cid=790b76115ce7298e785a396d7364905b&rid=200w.webp",
}, {
  question: "May Queen, Wisley Crab, Foxwhelps and Lane's Prince Albert are all species of what?",
  answers: ["1. Oranges", "2. Apples", "3. Pinnapples", "4. Strawberries"],
  rightAnswer: answers[1],
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
    $("#submit-button").hide();

  }


  function resetTimer() {
    numberSeconds = 30;
    $("#timer").text(numberSeconds);
    timer();
  }


  

  // function submit() {

  //   $("#question").hide();
  //   $("#submit-button").hide();
    
  //   displayResults();
  //   stopTimer();
  // }

  function displayResults (){
    $("#results").text("You answered correctly "+ correctAnswers + " questions out of 4");
    $("#rightAnswer").text("The correct answer is: " + randomQuestion.rightAnswer);

  }

  function resetGame (){
  $("#questions").hide();
  $("#submit-button").hide();
  $("#results").hide();
  // resetTimer();
  // startTimer();
  // showTrivia();
  }


  
  // var indexQuestion = questionAnswer
  // console.log(indexQuestion);


  function showTrivia() {
    $("#question").html(questionAnswers[index].question);
    for(var i=0; i< questionAnswers[index].answers.length;i++){
      // $("#answers").append(questionAnswers[index].answers[i]+"<br><br>")
    }
    
 
      var answerArr = questionAnswers.answers;
      var buttonsArr = [];

  for (i = 0; i < questionAnswers.answers.length; i++) {
    var button = $('<button>');
    button.text(answerArr[i]);
    button.attr('data-id', i);
    $('#answers').append(button);
   }
   $('#answers').on('click', 'button', function(e){
    userPick = $(this).data("id");
    questionAnswers.answers;
    if(userPick != questionAnswers.rightAnswer) {
   
    $('#answers').text("Wrong Answer!");
    incorrectAnswers++;
   
   }
    else if (userPick === questionAnswers.rightAnswer) {
   $('#answers').text("Correct!!!");
   correctAnswers++;
   
   }
   $("#question").hide();
    $("#submit-button").hide();
    
    displayResults();
    stopTimer();
    return questionAnswers;

    
  })
}
}
  }
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

  
function checkAnswer(chosenIndex) {
  var correctIndex = playQuestions[currentQuestion].correct_index;
  if (chosenIndex === correctIndex) {
      ++correctAnswers;
  } 
  else {
      ++wrongAnswers;
  }
  selectQuestion();
}








