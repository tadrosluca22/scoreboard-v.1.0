let minutes = 30;
let seconds = 0;
let timerInterval;
let isRunning = false;
let half = 1;

document.getElementById('timer').addEventListener('click', toggleTimer);

function toggleTimer() {
  if (!isRunning) {
    startTimer();
  } else {
    pauseTimer();
  }
}

function startTimer() {
  isRunning = true;
  timerInterval = setInterval(countDown, 1000);
}

function pauseTimer() {
  isRunning = false;
  clearInterval(timerInterval);
}

function countDown() {
  seconds--;
  if (seconds < 0) {
    minutes--;
    seconds = 59;
  }
  if (minutes < 0) {
    clearInterval(timerInterval);
    playBuzzer();
    if (half === 1) {
      document.getElementById('half').textContent = '2nd half';
      minutes = 30;
      seconds = 0;
      half = 2;
      resetTimer();
    } else {
      checkWinner();
      resetTimer();
      document.getElementById('half').textContent = '1st half';
    }
  } else {
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  }
}

function playBuzzer() {
  document.getElementById('buzzer').play();
}


let st1 = 0 
let st2 = 0
document.getElementById("st1").innerHTML = st1;
document.getElementById("st2").innerHTML = st2;


function pt1(){
  st1++
  document.getElementById("st1").innerHTML = st1;
}

function pt2(){
  st2++
  document.getElementById("st2").innerHTML = st2;
}

function checkWinner() {

  let team1= document.getElementById("team1").value;
  let team2 = document.getElementById("team2").value;

  if (st1 > st2 && team1 == ""){
    alert("Team 1 wins!")
  }else if (st1 > st2){
    alert(team1 + " wins!")
  }else if (st2 > st1 && team2 ==""){
    alert("Team 2 wins!")
  }else if(st2 > st1){
    alert(team2 + " wins!")
  }else if(st1 ==  st2 ){
    alert("It's a draw!")
  }
}

function resetTimer() {
  minutes = 30;
  seconds = 0;
  // half = 1;
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

function reset(){
  st1 = 0
  st2 = 0
  document.getElementById("st1").innerHTML = st1;
  document.getElementById("st2").innerHTML = st2;
  resetTimer();
  document.getElementById("team1").value = "";
  document.getElementById("team2").value = "";
  document.getElementById("half").innerHTML = "1st half";
}