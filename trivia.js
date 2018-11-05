

var startButton = document.getElementById("startButton");

// array of objects for trivia questions and answers
var questions = [questionOne, questionTwo, questionThree]
// trivia questions and answers
var questionOne = {
    question: "Some elves work out of the south pole.",
    answer: "true"
}
var questionTwo = {
    question: "Elves can grow over 4 feet tall.",
    answer: "false"
}
var questionThree = {
    question: "Elves can live to be 1379 years old.",
    answer: "true"
}



startButton.onclick = function(questions){

    // Start and print countdown
    
    // Populate Trivia questions
    var i;
    for (i=0; i<3; i++){
        $(".questions").append("<div>"+"Question"+questions[i]);
}}




