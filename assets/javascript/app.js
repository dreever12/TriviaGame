  $( document ).ready(function() {
     $('#startOver').hide();
     $('#done').hide();
     $('.stats').hide();

});

  // Click handler for the 'Start' button
  $("#start").on("click", function(event) {
    //hide startOver button
    $('#start').hide();
    //dislay timer 
    run();
    // display Question
    nextQuestion();
    $('#done').show();
  });
  
  //global variables 
  // var selections = []; //Array containing user choices 
  // var userGuess;  
  var number = 100;
  var intervalId
  // var questionCounter = 0;

//timer
//  $("#stop").on("click", stop);
// $("#resume").on("click", run);

function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

 function decrement() {
number--;
$("#show-number").html("<h2>" + number + "</h2>");
  if (number === 0) {
    stop();
    alert("time up");
  }
}

function stop() {
  clearInterval(intervalId);
}

//trivia questions array
  var questions = [{
    question: "How old am I- ",
    choices: [12, 14, 18, 19],
    correctAnswer: 3
  }, {
    question: "What color is my hair- ",
    choices: ["brown", "red", "green", "black"],
    correctAnswer: 0
  }, {
    question: "What size shoe do I wear- ",
    choices: [5, 6, 7, 8],
    correctAnswer: 2
  }, {
    question: "Where was I born- ",
    choices: ["cleveland", "fremont", "NYC", "florida"],
    correctAnswer: 2
  }, {
    question: "How many siblings do I have- ",
    choices: [1, 2, 3, 4],
    correctAnswer: 3
  }];


// var question = $("#question")
// var options = $("#options")


function nextQuestion() {
  // $("#question").append(questions.choices)
  console.log(nextQuestion);
    for (var i = 0; i < questions.length; i++) {
      var div = $("<div class= 'question'>" ); 
      div.text(questions[i].question);
     $("#question").append(div);
     // $("#question").append(questions[i].choices);
     addAnswers();

     function addAnswers(answers) {
           for (var j = 0; j < questions[j].choices.length; j++) {          
                 var button = $("<button class= 'choices'>");
                 button.text(questions[i].choices[j]); 
                 if (j === questions[i].correctAnswer) {
                  button.attr('data-value', 'correct');
                 }   
                 else {
                  button.attr('data-value', 'wrong');    
                 }                      
                 $("#question").append(button);

            };
        };

    };
};

//addId to each button 
var win = 0
var lose = 0

 $(document).on("click", '.choices', function trackStats() {
  if(this.getAttribute('data-value') === 'correct') {
    win++;
    console.log("win");
  }
  else if(this.getAttribute('data-value') === 'wrong') {
    lose++;
    console.log(lose);
  }
  
  //add if else conditions to check if data value = wrong or right answer 
 });


 $("#done").on("click", function() {
  $("#done").hide();
  $(".choices").hide();
  $(".question").hide();
  $('.stats').show();
  $('#startOver').show();
  $("#show-number").hide();
});

$("#startOver").on("click", function() {
  $(".choices").show();
  $(".question").show();
  $('#startOver').hide();
  $("#show-number").show();
  run();
  $('.stats').hide();
  $("#done").show();
});
//disable the button if the user 

// if question.choices

//if (userguess === 0) {
  // stop();
  //hide questions
  // show user stats 
  //start over button 
//}

  //question format
  // function question() {
    //show question 
    //choices in list format
    //along with radio button
    //show timer 45sec for each question displayed 
  // }
  //function to move from question to question
  // function displayNext() {
  //   if (userGuess === true) {
  //     track user guess to display at the end
  //     else (user === false)
  //       track user guess to display at the end 

  //   }
  // }

//when player has answered all questions show right answers/wrong answers and start over button
  //function startover() {

  //}

// var questionId = -1;
// function nextQuestion() {
//   // Check my answer for current question
//   if(questionId >= 0) {
//     // if(userGuess === correct)
//     //    play happy animation
//     // else
//     //    play sad
//   }
//   // Go to the next question after a few seconds...
//   questionId++;
//   // Load question[questionId] (initially load question[0] )
// };









