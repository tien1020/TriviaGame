
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
       animateImage: ,
},{
       Question: "What is the diameter of Earth?",
      answerArray: ["1. 12.000 miles ", "2. 10.000 miles", "3. 8.000 miles", "4. 15.000 miles"],
       rightAnswer: "3. 8000 miles",
       animateImage: ,
}, {
       Question: "May Queen, Wisley Crab, Foxwhelps and Lane's Prince Albert are all species of what?",
       answerArray: ["1. Oranges", "2. Apples", "3. Pinnapples", "4. Strawberries"],
        rightAnswer: "2. Apples", 
}

]

setTimeout(thirtyseconds,1000*30);

//  Interval Demonstration
    //  Set our number counter to 100.
    var number = 100;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();