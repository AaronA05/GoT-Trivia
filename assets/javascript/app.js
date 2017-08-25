//Global Variables

//For the timer and answer checks
var time = 60;
var timeRunning = false;
var timeID;
var correct = 0;
var incorrect = 0;
var isPicked = false;
var answersIn = false;
var totalQuestions = 10;

//For holding the answers generated from the quiz
var questionOneAns;
var questionTwoAns;
var questionThreeAns;
var questionFourAns;
var questionFiveAns;
var questionSixAns;
var questionSevenAns;
var questionEightAns;
var questionNineAns;
var questionTenAns;




//Global Functions

//Keep the clock counting down until 0
function startCounting (){
	if(time > 0){
		time--;
		$("#time-display").html("<h2>Time Remaining: " + time + " Seconds</h2>");
//If answers have not been submitted when time is up, submit them and check answers
	} else if(time === 0 && answersIn === false){
		checkAnswers();
	} 

}

//Gets the clock running to start
function startClock(){
	if(!timeRunning){
		timeID = setInterval(startCounting, 1000 * 1);
		timeRunning = true;
	} 

}

//Checks all the answers and ends the game -- happens either on submit or at time = 0
function checkAnswers(){
	if(questionOneAns === "correct"){
		correct++;
	} else if (questionOneAns === "incorrect"){
		incorrect++;
	}

	if(questionTwoAns === "correct"){
		correct++;
	} else if (questionTwoAns === "incorrect"){
		incorrect++;
	}

	if(questionThreeAns === "correct"){
		correct++;
	} else if (questionThreeAns === "incorrect"){
		incorrect++;
	}

	if(questionFourAns === "correct"){
		correct++;
	} else if (questionFourAns === "incorrect"){
		incorrect++;
	}

	if(questionFiveAns === "correct"){
		correct++;
	} else if (questionFiveAns === "incorrect"){
		incorrect++;
	}

	if(questionSixAns === "correct"){
		correct++;
	} else if (questionSixAns === "incorrect"){
		incorrect++;
	}

	if(questionSevenAns === "correct"){
		correct++;
	} else if (questionSevenAns === "incorrect"){
		incorrect++;
	}

	if(questionEightAns === "correct"){
		correct++;
	} else if (questionEightAns === "incorrect"){
		incorrect++;
	}

	if(questionNineAns === "correct"){
		correct++;
	} else if (questionNineAns === "incorrect"){
		incorrect++;
	}

	if(questionTenAns === "correct"){
		correct++;
	} else if (questionTenAns === "incorrect"){
		incorrect++;
	}

	//Game over screen to show results and hide quiz
	answersIn = true;
	$("#my-quiz").hide();
	$("#time-display").hide();
	$("#submit").hide();
	$("#game-over").show();
	$("#game-over").append("<h2> You got " + correct + " right </h2>");
	$("#game-over").append("<h2> You got " + incorrect + " wrong </h2>");
	$("#game-over").append("<h2> You did not answer " + (totalQuestions - (correct + incorrect)) + " questions</h2>" )
}

//Global functions and variables defined above, this is game play
//Set even listenr when page is done loading
$(document).ready( function(){
	//Hide the quiz and game over screen to start
	$("#my-quiz").hide();
	$("#game-over").hide();


	//When game starts, show clock, hide welcome screen and log user responses to questions
	$("#start-game").on("click", function(){
		startClock();
		$("#submit").html("<button> SUBMIT! </button>");
		$("#welcome").hide();
		$("#my-quiz").show();

		//Logging user responses to my questions
		$("input[name='question1']").on("click", function(){
			questionOneAns = this.value;
		});

		$("input[name='question2']").on("click", function(){
			questionTwoAns = this.value;
		});

		$("input[name='question3']").on("click", function(){
			questionThreeAns = this.value;
		});

		$("input[name='question4']").on("click", function(){
			questionFourAns = this.value;
		});

		$("input[name='question5']").on("click", function(){
			questionFiveAns = this.value;
		});

		$("input[name='question6']").on("click", function(){
			questionSixAns = this.value;
		});

		$("input[name='question7']").on("click", function(){
			questionSevenAns = this.value;
		});

		$("input[name='question8']").on("click", function(){
			questionEightAns = this.value;
		});

		$("input[name='question9']").on("click", function(){
			questionNineAns = this.value;
		});

		$("input[name='question10']").on("click", function(){
			questionTenAns = this.value;
		});

		//When submit button is clicked it stops timer and checks score
		$("#submit").on("click", function(){
				checkAnswers();
				answersIn = true;
		});	

	});

});

