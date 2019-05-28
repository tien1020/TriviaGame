# TriviaGame
I got this code from https://stackoverflow.com/questions/42614939/trivia-game-using-jquery
 var button = $('<button>');
    button.text(answerArr[i]);
    button.attr('data-id', i);
    $('#answers').append(button);
   }
   $('#answers').on('click', 'button', function(e){
    userPick = $(this).data("id");
    randomQuestion.answers;
    if(userPick != randomQuestion.rightAnswer) {
   
    $('#answers').text("Wrong Answer!");
    incorrectAnswers++;
   
   }
    else if (userPick === randomQuestion.rightAnswer) {
   $('#answers').text("Correct!!!");
   correctAnswers++;
   
   }