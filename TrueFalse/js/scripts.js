function check() {

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var question11 = document.quiz.question11.value;
  var question12 = document.quiz.question12.value;
  var question13 = document.quiz.question13.value;
  var question14 = document.quiz.question14.value;
  var question15 = document.quiz.question15.value;
  var correct = 0

  if (question1 == "Matriach") {
    correct++;
  }
  if (question2 == "Wildebeest") {
    correct++;
  }
  if (question3 == "Serengeti") {
    correct++;
  }
  if (question4 == "Lake Victoria") {
    correct++;
  }
  if (question5 == "Mt Kilimanjaro") {
    correct++;
  }
  if (question6 == "Tana River") {
    correct++;
  }
  if (question7 == "Mount Everest") {
    correct++;
  }
  if (question8 == "Rwanda") {
    correct++;
  }
  if (question9 == "Nairobi") {
    correct++;
  }
  if (question10 == "China") {
    correct++;
  }
  if (question11 == "Australia") {
    correct++;
  }
  if (question12 == "Europe") {
    correct++;
  }
  if (question13 == "Asia") {
    correct++;
  }
  if (question14 == "Sahara desert") {
    correct++;
  }
  if (question15 == "Island") {
    correct++;
  }

  var messages = ["Well done!", "Good job!",
    "Keep trying!"
  ];

  var range;

  if (correct < 3) {
    range = 2;
  }
  if (correct > 0 && correct < 6) {
    range = 1;
  }
  if (correct > 13) {
    range = 0;
  }

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}
