var startButtonEl = document.getElementById("startButton");
var quiz = document.getElementById("quiz");
var p1 = document.getElementById("p1");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var timer = document.getElementById("timer");
var quizAreaEl = document.getElementById("quiz-area");
var questionAnswersEl = document.getElementById("question-answers");
var CorrectIncorrect = document.getElementById("correct-incorrect");
var highScoreName = document.getElementById("submit-name");
var submitBtn = document.getElementById("submit-button");
var currentquestion = 0;
var timerStart = 75;
var timeLeft = 75;
var startTime = 0;
var currentTime = 0;
// var maxHighScore = 5;

choiceA.style.display = "none";
choiceB.style.display = "none";
choiceC.style.display = "none";
choiceD.style.display = "none";
var test; 
highScoreName.style.display = "none";
hS = JSON.parse(localStorage.getItem("highscore")) || [];
// Sets up timer interval for score to be taken from 

var quizTimer = function(){
    test = setInterval(function() {
    currentTime = startTime++
    timeLeft = timerStart - currentTime
    timer.innerHTML = timeLeft
    console.log(timeLeft)
    console.log(currentTime)
},1000)}

// questions for user to answer 
var questions = [
    {
        question: "In the DOM's event object, what does its target property refer to?",
        choiceA: "It refers to the HTML element that was interacted with to dispatch the event.",
        choiceB: "It refers to the HTML element we want to affect as a result of our dispatched event.",
        choiceC: "It refers to the HTML element that was last loaded to the page.",
        choiceD: "It refers to the Javascript variable we have interacted with.",
        correctChoice: choiceA
    },
    {
        question: "How do you display an alert box with the message Hello World?",
        choiceA: "alertBox('Hello World')",
        choiceB: "msg('Hello World')",
        choiceC: "alert('Hello World')",
        choiceD: "msgBox('Hello World')",
        correctChoice: choiceC

    },
    {
        question: "What is the correct way to write an IF statement for some code if 'i' is NOT equal to 5?",
        choiceA: "if(i != 5)",
        choiceB: "if i != 5",
        choiceC: "if (i = 5)",
        choiceD: "if i <> 5",
        correctChoice: choiceA
    },
    {
        question: "What is right way to put these colors in an array?",
        choiceA: "var colors = 'red','blue','green'",
        choiceB: "var colors = red, blue, green",
        choiceC: "var colors = 1(red), 2(blue), 3(green)",
        choiceD: "var colors = ['red', 'blue' 'green']",
        correctChoice: choiceD
    },
    {
        question: "Which of these are NOT a HTML event handler?",
        choiceA: "onfocus",
        choiceB: "onsubmit",
        choiceC: "onclick",
        choiceD: "onenter",
        correctChoice: choiceD
    }


];


// Displays question and answers for user to pick from 
var quizQuestion = function() {
    var quest = questions[currentquestion];
    console.log(quest)
    question.textContent = quest.question;
    choiceA.textContent = quest.choiceA
    choiceB.innerHTML = quest.choiceB;
    choiceC.innerHTML = quest.choiceC;
    choiceD.innerHTML = quest.choiceD;
    answerCheck();
};

// Begins quiz by User's click
var startQuizinator = function(event) {
    
    p1.style.display = "none";
    startButtonEl.style.display = "none";
    timer.innerHTML =  timeLeft
    choiceA.style.display = "";
    choiceB.style.display = "";
    choiceC.style.display = "";
    choiceD.style.display = "";
    quizTimer();
    quizQuestion();
};


// Checks users answer selection 
var handleAnswerClick = function(event) {
var checkanswer = event.target;

    if (checkanswer === questions[currentquestion].correctChoice) {
        console.log("correct");
        CorrectIncorrect.textContent = "Correct Answer";
        questionProgress()
    }
    else if (checkanswer !== questions[currentquestion].correctChoice) {
        // questions++;
        console.log("incorrect")
        startTime = startTime + 10;
        CorrectIncorrect.textContent = "Incorrect Answer";
        questionProgress()
    
    }
}

var answerCheck = function() {
    questionAnswersEl.addEventListener("click", handleAnswerClick )
};

// displays users score and stops interval 

var endgame = function() {
    clearInterval(test);
    score = timeLeft;
    p1.textContent = "The Game is over";
    question.textContent = "Your score was " + score + " ."
    choiceA.textContent = "Please enter your initals to enter into the high scores:";
    choiceB.style.display = "none";
    choiceC.style.display = "none";
    choiceD.style.display = "none";
    CorrectIncorrect.style.display = "none";

    highScoreName.style.display = "";
    highScoreSubmit()
};

// Moves to the next question unless at the end of the list 
var questionProgress = function() {
    currentquestion++
    if (currentquestion >= questions.length) {

        endgame()
    }
    else if (timeLeft === 0){
        
        endgame();
    }
    else {
        
        quizQuestion()
    }

};
var highScoreSubmit = function() {
    submitBtn.addEventListener("click", handleHighScoreSubmit )
};
var handleHighScoreSubmit = function(event) {
    event.preventDefault();
    var inital = document.getElementById("initial-input").value;
    var HIGHSCORE = {
        score: score,
        name: inital
    };
    hS.push(HIGHSCORE);
    hS.sort((a,b) =>b.score - a.score);
    hS.splice(5);
    localStorage.setItem("highscore", JSON.stringify(hS));
    restart();
}
var restart = function() {
    highScoreName.style.display = "none"
    question.textContent = "Score submitted. Visit the high score page to see!";
    choiceA.style.display = "none";

}
startButtonEl.addEventListener("click", startQuizinator)


