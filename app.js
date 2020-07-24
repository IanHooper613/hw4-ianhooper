var startButton = document.querySelector('#start-button');
var submitButton = document.getElementById('submit-button');
var backButton = document.getElementById('back-button');
var clearButton = document.getElementById('clear-button');
var highscoreButton = document.getElementById('highscore-button')

// page elements
var homePage = document.getElementById('home-page');
var questionPage = document.getElementById('question-page');
var scorePage = document.getElementById('score-page');
var highscorePage = document.getElementById('highscore-page')

var questionEl = document.getElementById('question');
var answersEl = document.getElementById('answers');
var correctEl = document.getElementById('correct');
var initialsEl = document.getElementById('initials');
var highscoresEl = document.getElementById('highscores')
var timerEl = document.getElementById('timer')
var scoreEl = document.getElementById('score')

var gameOver = false;
var score;
var highscoreArray = [];


var question1 = {
    question: "Commonly used data types do not include ______.",
    answer1: "strings",
    answer2: "boolians",
    answer3: "alerts",
    answer4: "numbers",
    rightAnswer: "numbers"
}

var question2 = {
    question: "The condition in an if / else statement is enclosed within ______.",
    answer1: "quotes",
    answer2: "curly brackets",
    answer3: "parentheses",
    answer4: "square brackets",
    rightAnswer: "parenthesis"
}

var question3 = {
    question: "Arrays in JavaScript can be used to store ______.",
    answer1: "numbers and strings",
    answer2: "other arrays",
    answer3: "boolians",
    answer4: "all of the above",
    rightAnswer: "all of the above"
}

var question4 = {
    question: "String values must be enclosed within _____ when being assigned variables.",
    answer1: "commas",
    answer2: "curly brackets",
    answer3: "quotes",
    answer4: "parentheses",
    rightAnswer: "quotes"
}

var question5 = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer1: "JavaScript",
    answer2: "terminal/bash",
    answer3: "for loops",
    answer4: "console log",
    rightAnswer: "console log"
}

var questionArray = [question1, question2, question3, question4, question5]
var questionIndex = 0;
     
function init() {
    if(localStorage.getItem('highscores') !== null) {
        highscoreArray = JSON.parse(localStorage.getItem('highscores'));
        console.log('1')
    } else {
        localStorage.setItem('highscores', JSON.stringify(highscoreArray));
        console.log('2')
    }
}

function viewHighscores() {
    gameOver = true;
    homePage.classList.add('d-none');
    questionPage.classList.add('d-none');
    scorePage.classList.add('d-none');
    highscorePage.classList.remove('d-none');
    renderHighscores();
}

function startQuiz() {
    homePage.classList.add('d-none')
    questionPage.classList.remove('d-none')
    gameOver = false
    questionIndex = 0;

    startClock();
    askQuestion();
}

function startClock() {
    score = 75;
    timerEl.textContent = score;
    var timerInterval = setInterval(function() {
        if(gameOver) {
            clearInterval(timerInterval);
        } else if(score <= 0) {
            gameOver = true;
            clearInterval(timerInterval);
            correctEl.textContent = "Time is up";
            scoreEl.textContent = score;
            setTimeout(function(){questionPage.classList.add('d-none');
            scorePage.classList.remove('d-none');},1002)
        } else {
            score--;
            timerEl.textContent = score;
        }
    }, 1000)
}

function askQuestion() {
    answersEl.innerHTML = '';
    questionEl.textContent = questionArray[questionIndex].question;
    var answerArray = generateAnswerArray(questionArray[questionIndex]);
    for (var i = 0; i < answerArray.length; i++) {
        var answerButton = document.createElement('button')
        answerButton.textContent = answerArray[i]
        answerButton.classList.add('btn', 'btn-primary')
        answersEl.appendChild(answerButton)
    }
}

function generateAnswerArray(question) {
    var answerArray = []
    answerArray.push(
        question.answer1,
        question.answer2,
        question.answer3,
        question.answer4,
        question.rightAnswer
    );
    shuffle(answerArray)
    return answerArray
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
}

function checkAnswer(event) {
    if(event.target.matches('button')) {
        if(event.target.textContent === questionArray[questionIndex].rightAnswer) {
            correctEl.textContent = 'Correct';
            setTimeout(function() {
                correctEl.textContent = '';
            }, 1200);
        } else {
            if(score >= 15) {
                score -= 15;
            } else {
                score = 0;
                setTimeout(function() {
                    questionPage.classList.add('d-none');
                    scorePage.classList.remove('d-none');
                }, 1002)
            }
            timerEl.textContent = score;
            correctEl.textContent = 'Wrong';
            setTimeout(function() {
                correctEl.textContent = '';
            }, 1000);
        }
        if(questionIndex < questionArray.length - 1) {
            questionIndex++;
            askQuestion();
        } else {
            gameOver = true;
            setTimeout(function() {
                questionPage.classList.add('d-none');
                scorePage.classList.remove('d-none');
            }, 1002);
            scoreEl.textContent = score;
        }
    }
}





highscoreButton.addEventListener('click', viewHighscores);
startButton.addEventListener('click', startQuiz);
answersEl.addEventListener('click', checkAnswer);
submitButton.addEventListener('click', submitButton);


init();
