

var startButton = document.getElementById("startButton");

// array of objects for trivia questions and answers
var questions = [
    {
        "trivia": "Some elves work out of the south pole.",
        "answer": "true"
    },
    {
        "trivia": "Elves can grow over 4 feet tall.",
        "answer": "false"
    },
    {
        "trivia": "Elves can live to be 1379 years old.",
        "answer": "true"
    }]




startButton.onclick = function() {

// Begin and print countdown

    // var timeRemaining = 5;
    // $("#countdown").append("<div>"+"<h3>" + "You have " + timeRemaining + " seconds to answer!");setTimeout(timeUp, 1000 * 15);

// Populate Trivia questions
    var i;
    for (i=0; i<3; i++){
        $(".questions").append("<div>"+questions[i].trivia);
        $(".questions").append("<div>"+"<button>"+"True"+"<button>"+"False");

    }
    


// function fiveSeconds() {
    
// }
}




