
//using jquery create document ready function to handle our "go" and 
//check buttons + any future actions
$(document).ready(() => {
  $("#go").click(() => {
    run();
  })
})


//go get the data from the API based on difficulty selection
function run() {
    //using jquery empty the output div so it can run a second time
    //using jquery  get the "difficulty" and set into a var called //difficulty
    
    //this is good!  look at how this works:
    $.ajax({
        url: 'https://opentdb.com/api.php?amount=10&difficulty=',
        dataType: "json",
        success: process
    });
    //it gets some json from that server passing it a difficulty
    //var, and then passes the results along to a func called "process"
}

// process the response from the API
function process(data) {
    console.log(data)

    var q = data.results;
    
    //using jquery get the output div and set it 
    //into a var called output
    var output = $("#output");

    //using array.map, write a block that outputs each
    //question, and inside of that, maps each answer choice, like:

    var z = q.map( (h,index) => {
        //append the question into the div + "<br>"
        //append the correct answer into the div + "<br>"
        output.append(h.question + "<br>")
        output.append(createRadio(index,h.correct_answer))
        output.append(h.correct_answer + "<br>")

        //map again over the incorrect answers array
        //append each incorrect answer into the div + "<br>"
        var zz = h.incorrect_answers.map((a) => {
          output.append(createRadio(index,a));          
          output.append(a + "<br>");
        })
    })
    
}

// helper method to build & return the radio button elements
function createRadio(qNum, answer) {
  var radio = document.createElement("input");
  radio.type = "radio"
  radio.name = qNum;
  radio.value = answer;
  return radio;
}

// checks the users answers vs the correct answers - complete later
function checkAnswers() {

}