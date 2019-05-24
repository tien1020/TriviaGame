
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