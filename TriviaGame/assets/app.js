
$(document).ready(function () {

  $("#form").hide();
  $("#timer").hide();

  $("#start-button").click(function () {
    $("#form").show();
    $("#start-button").hide();
    $("#timer").show();



  });


  var correctAns = 0;
  var numOfQuestions = 8;
  var wrongAns = 0;


  var counter = 45;
  var interval = setInterval(function () {
   $("#timer").html(counter);
    counter--;

    if (counter < 0) {

      clearInterval(interval);
    }
  }, 1000);

  $("#submit").click(function () {


    var ansArr = ["b", "b", "d", "d", "c", "d"];
    var questions = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"];
    var q1 = document.forms["quiz"]["q1"].value;
    var q2 = document.forms["quiz"]["q2"].value;
    var q3 = document.forms["quiz"]["q3"].value;
    var q4 = document.forms["quiz"]["q4"].value;
    var q5 = document.forms["quiz"]["q5"].value;
    var q6 = document.forms["quiz"]["q6"].value;
    var q7 = document.forms["quiz"]["q7"].value;
    var q8 = document.forms["quiz"]["q8"].value;
    var userInput = $(this).attr("value");


    for (var i = 1; i < questions.length; i++) {
      if (userInput === ansArr[i]) {
        correctAns++;


      } else {
        wrongAns++;
      }
    }

    var results = $("#results");
    results.html("You Scored " + score + " points out of " + numOfQuestions + "</h2>")
   

  });

});




    // // var stopTimer;
    // // var intervalId;

    // // var correct = 0;
    // // var incorrect = 0;
    // // var unaswered = 0;
    // // var clockRunnig = false;

    // 
    //     $(".results").hide();

    //     $("#submit").click( function(){
    //       // correctAnswers();
    //       $(".results").show();


    //   });



    // });


    // function correctAnswers() {
    //   if(!clockRunnig) {
    //     var userInput = $(this).attr(value);
    //     if(userInput === "right") {
    //       correct++;
    //     }

    //   }else{
    //     incorrect++;
    //   }
    // }





// });
