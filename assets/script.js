var startButtonEl = document.getElementById("startButton");
var quiz = document.getElementById("quiz");
var p1 = document.getElementById("p1");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var timer = document.getElementById("timer");
var quizAreaEl = document.getElementById("quiz-area")
var questionAnswersEl = document.getElementById("question-answers")
var currentquestion = 0;
var timerStart = 75;
var timeLeft = 75;
var startTime = 0;
var currentTime = 0;
var test; 

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
        question: "What letter comes first in the alphabet?",
        choiceA: "incorrect",
        choiceB: "correct",
        choiceC: "incorrect",
        choiceD: "incorrect",
        correctChoice: choiceB
    },
    {
        question: "What is the shortened form of pi?",
        choiceA: "correct",
        choiceB: "incorrect",
        choiceC: "incorrect",
        choiceD: "incorrect",
        correctChoice: choiceA

    },
    {
        question: "What is the shortened form of pi?",
        choiceA: "correct",
        choiceB: "incorrect",
        choiceC: "incorrect",
        choiceD: "incorrect",
        correctChoice: choiceA
    },
    {
        question: "What is the shortened form of pi???",
        choiceA: "correct",
        choiceB: "incorrect",
        choiceC: "incorrect",
        choiceD: "incorrect",
        correctChoice: choiceA
    },
    {
        question: "What is the shortened form of pi??",
        choiceA: "correct",
        choiceB: "incorrect",
        choiceC: "incorrect",
        choiceD: "incorrect",
        correctChoice: choiceA
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
    timer.innerHTML = timeLeft
    quizTimer();
    quizQuestion();
};


// Checks users answer selection 
var handleAnswerClick = function(event) {
var checkanswer = event.target;

    if (checkanswer === questions[currentquestion].correctChoice) {
        console.log("correct");
        questionProgress()
    }
    else if (checkanswer !== questions[currentquestion].correctChoice) {
        // questions++;
        console.log("incorrect")
        startTime = startTime + 10;
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
    

};

// Moves to the next question unless at the end of the list 
var questionProgress = function() {
    currentquestion++
    if (currentquestion >= questions.length) {

        endgame()
    }
    else {
        
        quizQuestion()
    }

};

startButtonEl.addEventListener("click", startQuizinator)