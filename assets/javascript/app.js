
var time = 5;
var timeRunning = false;
var timeID;
var correct = 0;
var isPicked = false;
var realValue;
var answersIn = false;

//this example would be useful to log the correct answer to check against
var testDummy = $("#answers1")
			.children()
			.eq(2)
			.attr("value");	
console.log(testDummy);

var testDummy2 = $("#answers1")
			.children()
			.attr("name");
console.log(testDummy2);




//this is where my real code starts
function startCounting (){
	if(time > 0){
		time--;
		$("#time-display").html(time);
	} else if(time === 0 && answersIn === false){
		checkAnswers();
		answersIn = true;
	}

}

function startClock(){
	if(!timeRunning){
		timeID = setInterval(startCounting, 1000 * 1);
		timeRunning = true;
	} 

}

function checkAnswers(){
	if(realValue === "2017"){
		console.log("TIME UP YEAH");
	}
}


$("#start-game").on("click", function(){
	startClock();
	$("#submit").html("<button> SUBMIT! </button>");

	$("input[name='question1']").on("click", function(){
		realValue = this.value;
		console.log(realValue);

		//need to make this the function that runs at end of timer
		$("#submit").on("click", function(){
			checkAnswers();
			answersIn = true;
		});

	});

});