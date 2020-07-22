var startButton = document.getElementById('start-button');
var submitButton = document.getElementById('submit-button');
var backButton = document.getElementById('back-button');
var clearButton = document.getElementById('clear-button');

// page elements
var homePage = document.getElementById('home-page');
var questionPage = document.getElementById('question-page');
var scorePage = document.getElementById('score-page');
var highscorePage = document.getElementById('highscore-page')

var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answers');
var correctEl = document.getElementById('correct');
var initialsEl = document.getElementById('initials');
var highscoresEl = document.getElementById('highscores')



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
     

