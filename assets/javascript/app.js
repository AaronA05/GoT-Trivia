
var time = 30;
var timeRunning = false;
var timeID;
var correct = 0;
var incorrect = 0;
var isPicked = false;
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
var answersIn = false;
var totalQuestions = 10;

//this is where my real code starts
function startCounting (){
	if(time > 0){
		time--;
		$("#time-display").html(time);
	} else if(time === 0 && answersIn === false){
		checkAnswers();
	} 

}

function startClock(){
	if(!timeRunning){
		timeID = setInterval(startCounting, 1000 * 1);
		timeRunning = true;
	} 

}

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




	answersIn = true;
	$("#my-quiz").hide();
	$("#time-display").hide();
	$("#submit").hide();
	$("#game-over").show();
	$("#game-over").append("<h2> You got " + correct + " right </h2>");
	$("#game-over").append("<h2> You got " + incorrect + " wrong </h2>");
	$("#game-over").append("<h2> You did not answer " + (totalQuestions - (correct + incorrect)) + " questions</h2>" )
}

$(document).ready( function(){
	$("#my-quiz").hide();
	$("#game-over").hide();



	$("#start-game").on("click", function(){
		startClock();
		$("#submit").html("<button> SUBMIT! </button>");
		$("#welcome").hide();
		$("#my-quiz").show();

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







		//need to make this the function that runs at end of timer
		$("#submit").on("click", function(){
				checkAnswers();
				answersIn = true;
		});	

	});

});














//this example would be useful to log the correct answer to check against

// for (var q = 0; q < 2; q++){
// 	var testDummy = $("#my-quiz")
// 				.children()
// 				.eq(q)
// 				.children()
// 				.eq(q)
// 				.attr("value");

// 	console.log(testDummy);

// }

// var testDummy2 = $("#answers1")
// 			.children()
// 			.attr("name");
// console.log(testDummy2);
