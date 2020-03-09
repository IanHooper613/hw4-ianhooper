
var counter = 10;
var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0) {
     		clearInterval(interval);
      	$('#timer').html("<h3>Count down complete</h3>");  
        return;
    }else{
    	$('#time').text(counter);
      console.log("Timer --> " + counter);
    }
}, 1000);

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}


function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {

    if(this.getQuestionIndex() .correctAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
    
}

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
    }
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices(i);
            guess("btn" + i, choices[i]);
        }

        showProgress();

    

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}


function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questionIndex.length;
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
        gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
            var element = document.getElementById("quiz");
                element.innerHTML = gameOverHtml;
            }


var questions = [
    new Question("The condition in an if / else statement is enclosed within ______.", ["quotes","curly brackets","parentheses","square brackets"], "parenthesis"),
    new Question("The condition in an if / else statement is enclosed within ______.", ["quotes","curly brackets","parentheses","square brackets"], "parenthesis"),
    new Question("Arrays in JavaScript can be used to store _____.", ["numbers and strings","other arrays","boolians","all of the above"], "all of the above"),
    new Question("String values must be enclosed within _____ when being assigned variables.", ["commas","curly brackets","quotes","parentheses"], "quotes"),
    new Question("A very useful tool used during development and debugging for printing content to the debugger is:", ["JavaScript","terminal/bash","for loops","console log"], "console log")
];

var quiz = new Quiz(questions);

populate()
}

var answer = selectedOption.value;
    if(question[currentQuestion].answer == answer) {
        score + 2;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1) {
        nextButton.textContent = 'finished';
    }
    if(currentQuestion == totQuestions) {
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your score: ' + score;
        return;
    }
    loadQuestion(currentQuestion);


    loadQuestion(currentQuestion);