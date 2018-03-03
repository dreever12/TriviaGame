



//trivia questions array
  var questions = [{
    question: "Who does Michael accidentally hit with his car in the parking lot?",
    choices: ["Phyllis", "Kelly", "Jim", "Meridith"],
    correctAnswer: 3
  }, {
    question: "What's in the giant pot that Kevin drops all over the office floor?",
    choices: ["Chili", "Gravy", "Bolognese", "Soup"],
    correctAnswer: 0
  }, {
    question: "What does Michael pick as his username when he signs up for an online dating site?",
    choices: ["TheBoss", "Cuddler", "LittleKidLover", "BiggestB"],
    correctAnswer: 2
  }, {
    question: "Which country does Toby move to when he leaves his job at Dunder Mifflin, only to return later?",
    choices: ["Alabama", "Jamaica", "Costa Rica", "Cuba"],
    correctAnswer: 2
  }, {
    question: " What is the name of Angela's cat, which Dwight kills by putting it in the freezer?",
    choices: ["Flowers", "Bandit", "Tinkerbell", "Sprinkles"],
    correctAnswer: 3
  }];

  var timer
  //game function 
    var game = {
    win: 0,
    lose: 0,

    questionsRight: 0,
    correctAnswers: [],
    timeRemaining: 100,

    startTimer: function() {
      clearInterval(timer)
      timer = setInterval(decrement, 1000);
    },
    resetTimer: function() {
      clearInterval(timer)
    },
    start: function() {
      game.reset()
      game.startTimer()
    },
    reset: function() {
      game.resetTimer();
      game.questionsRight = 0;
      game.correctAnswers = [];
      game.timeRemaining = 100;
    }
  }

  $( document ).ready(function() {
     $('#startOver').hide();
     $('#done').hide();
     $('.stats').hide();

});

  // Click handler for the 'Start' button
  $("#start-button").on("click", function(event) {
    game.start()
    $('#start-button').hide();
    //dislay timer
    // display Question
    buildQuestions();
    $('#done').show();
  });

function decrement() {
  game.timeRemaining--;
  $("#show-number").html("<h2>" + game.timeRemaining + "</h2>");
  if (game.timeRemaining === 0) {
    alert("Time's up!");
    game.lose++
    gameOver();
  }
}

 $(document).on("click", '.choices', function trackStats() {
  if(this.getAttribute('data-value') === 'correct' && !game.correctAnswers.includes($(this).text())) {
    game.correctAnswers.push($(this).text());
    game.questionsRight++;
  } else if (game.correctAnswers.includes($(this).text())) {
    game.questionsRight--;
  }
})

$('#startOver').on('click', function() {
  newGame();
});

$('#done').on('click', function() {
  if (game.questionsRight === questions.length) {
    game.win++
  } else {
    game.lose++
  }
  gameOver()
});

function gameOver() {
  game.reset();
  $('#win-count').text('win ' + game.win);
  $('#lose-count').text('lose ' + game.lose);
  $("#done").hide();
  $(".choices").hide();
  $(".question").hide();
  $('.stats').show();
  $('#startOver').show();
  $("#show-number").hide();
}

function newGame() {
  game.start();
  $(".choices").show();
  $(".question").show();
  $('#startOver').hide();
  $("#show-number").show();
  $('.stats').hide();
  $("#done").show();
}







function buildQuestions() {
  for (var i = 0; i < questions.length; i++) {
    var div = $("<div class='question'>" );
    div.text(questions[i].question);
    $("#question").append(div);
    addAnswers();

   function addAnswers() {
     for (var j = 0; j < questions[j].choices.length; j++) {
       var button = $("<button class='choices'>");
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






