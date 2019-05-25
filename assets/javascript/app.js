
var correctAns = 0;
var IncorrectAns=0
var unAns=0
var clockRunning = setInterval(count, 1000);
var questionAndAnswers = [{
    Question: "What is the seventh planet from the sun?",
       answerArray: ["1. Neptune", "Mercury", "3. Earth", "4. Uranus"],
       rightAnswer: "4. Uranus",
       animateImage: ,
},
{
       Question: "What is the world's longest river?",
      answerArray: ["1. Amazon", "2. Nile", "3. Mekong", "4. Missouri"],
       rightAnswer: "1. Amazon",
       animateImage: "https://media3.giphy.com/media/pYvP6Bf0Uhtm0/200w.webp?cid=790b76115ce7298e785a396d7364905b&rid=200w.webp" ,
},{
       Question: "What is the diameter of Earth?",
      answerArray: ["1. 12.000 miles ", "2. 10.000 miles", "3. 8.000 miles", "4. 15.000 miles"],
       rightAnswer: "3. 8000 miles",
       animateImage: "https://media3.giphy.com/media/pYvP6Bf0Uhtm0/200w.webp?cid=790b76115ce7298e785a396d7364905b&rid=200w.webp" ,
}, {
       Question: "May Queen, Wisley Crab, Foxwhelps and Lane's Prince Albert are all species of what?",
       answerArray: ["1. Oranges", "2. Apples", "3. Pinnapples", "4. Strawberries"],
        rightAnswer: "2. Apples", 
}

]

setTimeout(seconds,1000*30);

    var numberSeconds = 30;
    var intervalId;

    $("#btn").on("click", start);

    
    function start() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      number--;
      $("#show-number").html("<h2>" + number + "</h2>");
      if (number === 0) {
        stop();
        alert("Time Up!");
      }
    }

   
    function stop() {

      clearInterval(intervalId);
    }
    run();

    function showTrivia(){
      $("#showQuestion").html(questionAnswers[index].question);
      for(var i=0; i< questionAnswers[index].answers.length;i++){
        $("#showPossibleAnswers").append(questionAnswers[index].answers[i]+"<br><br>")
      }
    
    }
    showTrivia()