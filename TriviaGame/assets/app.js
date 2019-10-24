
$(document).ready(function () {

  $("#form").hide();
  $("#show-number").hide();
  $("#results").hide();

  $("#start-button").click(function () {
    $("#form").show();
    $("#start-button").hide();
    $("#show-number").show();


  });


  var number = 60;
  var intervalId;
  $("#stop").on("click", stop);
  $("#resume").on("click", run);
  function run() {
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
      stop();
      $("#display").html("Time's up!!!");
      $("#results").show();
      $("#form").hide();
      
    }
  }

  var correctAns = 0;
  var unaswered = 0;
  var wrongAns = 0;



  function stop() {
    clearInterval(intervalId);
  }
  run();


  $("#submit").click(function () {

    event.preventDefault()
    $("#form").hide();
    $("#display").hide();
    $("#show-number").hide();
    $("#results").show();

    
    var questions = [
      {
        q1: "b"
      },

      {
        q2: "b"
      },

      {
        q3: "d"
      },

      {
        q4: "a"
      },
      { 
        q5: "d" 
      },
      {
        q6: "d"
      },
      { 
        q7: "c"
      },
      {
        q8: "d"
      }
    ]
    var userInput = $("form input[type ='radio']:checked").val();
    for (var i = 0; i < questions.length; i++)
      if (userInput === questions[i].q1) {
        correctAns++;
        $("#correct-answers").html("Correct Answers: " + correctAns);
      } else{
        wrongAns++;
        $("#incorrect-answers").html("Incorrect Answers: " + wrongAns);
      } 

  });

});

