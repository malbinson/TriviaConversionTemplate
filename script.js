
//using jquery create document ready function to handle our "go" and 
//check buttons + any future actions

//go get the data from the API based on difficulty selection
function run() {
    //using jquery empty the output div so it can run a second time
    //using jquery  get the "difficulty" and set into a var called //difficulty
    
    //this is good!  look at how this works:
    $.ajax({
        url: 'https://opentdb.com/api.php?amount=10&difficulty=' + difficulty,
        dataType: "json",
        success: process
    });
    //it gets some json from that server passing it a difficulty
    //var, and then passes the results along to a func called "process"
}

// process the response from the API
function process(data) {
    console.log(data)

    var questions = data.results;
    
    //using jquery get the output div and set it 
    //into a var called output
    

    //using array.map, write a block that outputs each
    //question, and inside of that, maps each answer choice, like:

    var z = q.map( (question) => {

        //append the question into the div + "<br>"
        //append the correct answer into the div + "<br>"

        //map again over the incorrect answers array
        //append each incorrect answer into the div + "<br>"

    })
    
}

// checks the users answers vs the correct answers - complete later
function checkAnswers() {

}