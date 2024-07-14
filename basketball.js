
let timer = document.getElementById("timer");
let period = document.getElementById("period");
let buzzer = document.getElementById("buzzer");
let intervalId;
let minutes = 10;
let seconds = 0;
let paused = true;
let periodCount = 1;

function updateTimer() {
  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  if (minutes < 0) {
    clearInterval(intervalId);
    buzzer.play();
    period.textContent = `Period: ${periodCount + 1}`;
    document.getElementById('bonusT2').style.background = 'bisque';   
    document.getElementById('bonusT1').style.background = 'bisque';    
    document.getElementById("foulsT1").innerHTML = 0
    document.getElementById("foulsT2").innerHTML = 0
    ft1 = 0;
    ft2 = 0;
    periodCount++;
    minutes = 10;
    seconds = 0;
    paused = true;
    timer.textContent = "10:00";
  } else {
    timer.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }
}

function startOrPauseTimer() {
  if (paused) {
    paused = false;
    intervalId = setInterval(updateTimer, 1000);
  } else {
    paused = true;
    clearInterval(intervalId);
  }
}

function resetTimer() {
  clearInterval(intervalId);
  paused = true;
  minutes = 10;
  seconds = 0;
  timer.textContent = "10:00";
  period.textContent = `Period: 1`;
  periodCount = 1;
}

timer.addEventListener("click", startOrPauseTimer);
document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    startOrPauseTimer();
  }
});

document.addEventListener("keyup", function(event) {
  if (event.code === "Space") {
    resetTimer();
  }
});




let pt1 = 0
let pt2 = 0 
document.getElementById("scoreT1").innerHTML = pt1
document.getElementById("scoreT2").innerHTML = pt2
let ft1 = 0 
let ft2 = 0
document.getElementById("foulsT1").innerHTML = ft1
document.getElementById("foulsT2").innerHTML = ft2


function add3T1() {
  pt1 += 3
  document.getElementById("scoreT1").innerHTML = pt1
}

function add2T1() {
  pt1 += 2
  document.getElementById("scoreT1").innerHTML = pt1
}

function add1T1() {
  pt1 += 1
  document.getElementById("scoreT1").innerHTML = pt1
}

function addFT1() {
  ft1 += 1
  document.getElementById("foulsT1").innerHTML = ft1
}

function BonusCheck1() {
  if (ft1 >= 5) {
    document.getElementById('bonusT1').style.background = 'yellow';
  }
}

function add3T2() {
  pt2 += 3
  document.getElementById("scoreT2").innerHTML = pt2
}

function add2T2() {
  pt2 += 2
  document.getElementById("scoreT2").innerHTML = pt2
}

function add1T2() {
  pt2 += 1
  document.getElementById("scoreT2").innerHTML = pt2
}

function addFT2() {
  ft2 += 1
  document.getElementById("foulsT2").innerHTML = ft2
}

function BonusCheck2() {
  if (ft2 >= 5) {
    document.getElementById('bonusT2').style.background = 'yellow';
  }
}

if (periodCount === 4 ) {
  if (pt1 > pt2) {
    let nameT1 = document.getElementById("t1").value;
    if(nameT1 == ""){
      alert("Team 1 wins!")
      reset()
    }else {
      alert(nameT1 + " wins!")
      reset()
    }
  } else if (pt1 < pt2) {
    let nameT2 = document.getElementById("t2").value;
    if(nameT2 == ""){
      alert("Team 2 wins!")
      reset()
    }else{
      alert(nameT2 + " wins!")
      reset()
    }
  }
}

function reset() {
  pt1 = 0
  pt2 = 0
  ft1 = 0
  ft2 = 0
  periodCount = 1
  
  document.getElementById("scoreT1").innerHTML = pt1
  document.getElementById("scoreT2").innerHTML = pt2
  document.getElementById("foulsT1").innerHTML = ft1
  document.getElementById("foulsT2").innerHTML = ft2
  document.getElementById("period").textContent = `Period: ${periodCount}`
  
  // Reset bonus indicators
  document.getElementById('bonusT1').style.background = 'bisque'
  document.getElementById('bonusT2').style.background = 'bisque'
  
  // Reset timer
  minutes = 10
  seconds = 0
  timer.textContent = "10:00"
  paused = true
}