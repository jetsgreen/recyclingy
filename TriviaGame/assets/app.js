
$(document).ready(function () {

  $("#form").hide();
  $("#show-number").hide();

  $("#start-button").click(function () {
    $("#form").show();
    $("#start-button").hide();
    $("#timer").show();
    $("#show-number").show();


  });




  var correctAns = 0;
  var numOfQuestions = 8;
  var wrongAns = 0;


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
      $();
    }
  }
  function stop() {
    clearInterval(intervalId);
  }
  run();


  $("#submit").click(function () {

    event.preventDefault()


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
    var userInput = $("form input[type ='radio']:checked").val();
    
    



    for (var i = 0; i < questions.length; i++) {
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
//  function correctAnswers() {
//       if(!clockRunnig) {
//         var userInput = $(this).attr(value);
//         if(userInput === "right") {
//           correct++;
//         }

//       }else{
//         incorrect++;
//       }
//     }





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








// });
