



var time = 5;
var timeRunning = false;
var timeID;
var correct = 0;
var isPicked = false;

var questionOne = {
		text: "What year is it?",
		answers: ["2007", "2017", "2027"],
		correctAnswer: "2017",
		createQuestion: function(){
			$("#question1").html("<h3>" + this.text + "</h3>");
			for (var i = 0; i < this.answers.length; i++){
				$("#question1").append("<input type='radio' name='question1'>" + this.answers[i]);
				$("input").attr("class", this.answers[i]);
			}
		}
}
questionOne.createQuestion();







// $(document).ready(function(){




// 	$("#start-game").on("click", function(){
// 		startClock();

// 	});

// 	 function startCounting (){
// 	 	if(time > 0){
// 		 	time--;
// 		 	$("#time-display").html(time);
// 	 	}
// 	 }

// 	 function startClock(){
// 	 	if(!timeRunning){
// 	 		timeID = setInterval(startCounting, 1000 * 1);
// 	 		timeRunning = true;
// 	 	}
// 	 }
	


// 	 $("#my-quiz").click(function(){
// 	 	if( $("#year2017").is(':checked') && isPicked === false ){
// 	 		console.log("YAAY");
// 	 		isPicked = true;
// 	 	}


// 	 });


// });