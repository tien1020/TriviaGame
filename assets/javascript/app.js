
var correctAnswers = 0;
var IncorrectAnswers=0;
var unAnswers=0;
var index = 0;
var questionAnswers = [{
    question: "What is the seventh planet from the sun?",
       answers: ["1. Neptune", "2. Mercury", "3. Earth", "4. Uranus"],
       rightAnswer: "4. Uranus",
      
},{
       question: "What is the world's longest river?",
      answers: ["1. Amazon", "2. Nile", "3. Mekong", "4. Missouri"],
       rightAnswer: "1. Amazon",
       animateImage: "https://media3.giphy.com/media/pYvP6Bf0Uhtm0/200w.webp?cid=790b76115ce7298e785a396d7364905b&rid=200w.webp" ,
},{
       question: "What is the diameter of Earth?",
      answers: ["1. 12.000 miles ", "2. 10.000 miles", "3. 8.000 miles", "4. 15.000 miles"],
       rightAnswer: "3. 8000 miles",
       animateImage: "https://media3.giphy.com/media/pYvP6Bf0Uhtm0/200w.webp?cid=790b76115ce7298e785a396d7364905b&rid=200w.webp" ,
}, {
       question: "May Queen, Wisley Crab, Foxwhelps and Lane's Prince Albert are all species of what?",
       answers: ["1. Oranges", "2. Apples", "3. Pinnapples", "4. Strawberries"],
        rightAnswer: "2. Apples", 
}

]

// setTimeout(seconds,1000*30);

    var numberSeconds = 30;
    var intervalId;


    
    function timer() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      numberSeconds--;
      $("#timer").html("<h2>" + number + "seconds left</h2>");
      if (numberSeconds === 0) {
        $("#questions").hide();
          $("#submit-button").hide();
          stop();
          submitAnswers();
          displayResults();
        }
        else if(numberSeconds==0) {
          stopTimer();
          stopGame();
          outOfTime(questionCount)
          setTimeout(function () {
              nextQuestion();
              resetTimer();
          }, 5000);
      }
    }

    $("#btn").on("click", start);
    function start(){
    
     $("#questions").show();
     $("#submit-button").show();
     
      timer();
      
      document.getElementById("question").reset();
  
    }

   
    function stopTimer() {
      clearInterval(intervalId);
     
    }
    start();

    function resetTimer() {
      numberSeconds = 30;
      $("#timer").text(numberSeconds);
      timer();
  }

  $("#submit-button").on("click", submit);  
  // what happens when start button is clicked
function submit(){
// show questions
$("#question").hide();
$("#submit-button").hide();
submitAnswers();
displayResults();
stop();
}



$(document).ready(function(){
  $("#timer").hide();
  $("#btn").on('click', trivia.startGame);
  $(document).on('click' , '.option', trivia.guessChecker);
  
})

    function showTrivia(){
      $("#question").html(questionAnswers[index].question);
      for(var i=0; i< questionAnswers[index].answers.length;i++){
        $("#answers").append(questionAnswers[index].answers[i]+"<br><br>")
      }
    
    }
    showTrivia();