
// $(document).ready(function () {
function onSubmit() {
  var score = 0;
  var numOfQuestions = 8;
  var ansArr = ["b", "b", "d", "d", "c", "d"];
  var q1 = document.forms["quiz"]["q1"].value;
  var q2 = document.forms["quiz"]["q2"].value;
  var q3 = document.forms["quiz"]["q3"].value;
  var q4 = document.forms["quiz"]["q4"].value;
  var q5 = document.forms["quiz"]["q5"].value;
  var q6 = document.forms["quiz"]["q6"].value;
  var q7 = document.forms["quiz"]["q7"].value;
  var q8 = document.forms["quiz"]["q8"].value;

  for (var i = 1; i <= numOfQuestions; i++) {
    if (eval("q" + i) === "") {
      alert("you missed question number " + i);
    }
  }
  for (var i = 1; i <= numOfQuestions; i++);
  if (eval("q" + i) === ansArr[i - 1]) {
    score++;
  }
  var results = document.getElementById("results");
  results.innerHTML = "<h2>You Scored " + score + " points out of " + numOfQuestions + "</h2>"
  return false;
}



    // $(".form").hide();
    // $("#timer").hide();

    // // var stopTimer;
    // // var intervalId;
    // var counter = 45;
    // // var correct = 0;
    // // var incorrect = 0;
    // // var unaswered = 0;
    // // var clockRunnig = false;

    // $("#start-button").click(function () {
    //     $(".form").show();
    //     $("#start-button").hide();
    //     $("#timer").show();
    //     $(".results").hide();

    //     $("#submit").click( function(){
    //       // correctAnswers();
    //       $(".results").show();


    //   });

    //     intervalId = setInterval(counter, 1000);
    //     setInterval(function () {
    //         counter--;
    //         // console.log(counter);
    //         $("#timer").html("Time remaining " + "00: " + counter);

    //         if (counter === 0) {
    //             clearInterval(counter);
    //         }


    //     }, 1000);

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
