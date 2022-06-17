// var hS = [];
var savedHighScores = JSON.parse(localStorage.getItem("highscore"));
highScorePlayer = document.getElementById("highscore-player");
highScoreScore = document.getElementById("highscore-score");
console.log(savedHighScores.score);
highScorePlayer.textContent = savedHighScores[1].name + " - " + savedHighScores[1].score;

