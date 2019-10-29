$(document).ready(function(){


    var correctAnswer = "For loops are fun and challenging";
    var answerLetters = [];
    answerLetters = correctAnswer.split("");


    for (i = 0; i < answerLetters.length; i +=1) {
      if (answerLetters[i] === "a" || answerLetters[i] === "i" || answerLetters[i] === "o" || answerLetters[i] === "u" || answerLetters[i] === "e") {
        $("#hiddenPhrase").append("-");
     } else {
      $("#hiddenPhrase").append(answerLetters[i]);
    }
};

   $("#userInput").submit(function(event) {
     event.preventDefault();

       $("#hiddenWrong").hide();
       $("#hiddenCorrect").hide();

     if ($("#guess").val() === correctAnswer) {
       $("#hiddenCorrect").show();
     } else {
       $("#hiddenWrong").show();
     }
 });
});
