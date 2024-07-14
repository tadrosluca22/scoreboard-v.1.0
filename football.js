let startTime = 0;
let endTime = 0;
let running = false;
let intervalId = 0;

document.getElementById("stopwatch-button").addEventListener("click", toggleStopwatch);

function toggleStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        intervalId = setInterval(updateStopwatch, 1000);
        running = true;
        document.getElementById("stopwatch-button").innerHTML = "Pause";
    } else {
        clearInterval(intervalId);
        running = false;
        document.getElementById("stopwatch-button").innerHTML = "Start";
    }
}

function updateStopwatch() {
    endTime = new Date().getTime();
    let timeElapsed = endTime - startTime;
    let minutes = Math.floor(timeElapsed / 60000);
    let seconds = Math.floor((timeElapsed % 60000) / 1000);
    let stopwatchTime = `${pad(minutes)}:${pad(seconds)}`;
    document.getElementById("stopwatch").innerHTML = stopwatchTime;
}

function pad(number) {
    return (number < 10? "0" : "") + number;
}

let st1 = 0
let st2 = 0
document.getElementById("scoreT1").innerHTML = st1
document.getElementById("scoreT2").innerHTML = st2

function t1Goal(){
    st1 += 1
    document.getElementById("scoreT1").innerHTML = st1
}

function t2Goal(){
    st2 += 1
    document.getElementById("scoreT2").innerHTML = st2
}

function reset() {
    clearInterval(intervalId);
    running = false;
    startTime = 0;
    endTime = 0;
    document.getElementById("stopwatch-button").innerHTML = "Start";
    document.getElementById("stopwatch").innerHTML = "00:00";
    st1 = 0;
    st2 = 0;
    document.getElementById("scoreT1").innerHTML = st1;
    document.getElementById("scoreT2").innerHTML = st2;
}

function checkWinner(){
    let t1 = document.getElementById("t1").value ;
    let t2 = document.getElementById("t2").value ;
    if (t1 == "" && st1 > st2){
        alert("Team 1 wins!")
        reset()
    }else if(st1 > st2){
        alert(t1 + " wins!")
        reset()
    }else if(t2 == "" && st2 > st1){
        alert("Team 2 wins!")
        reset()
    }else if(st2  > st1){
        alert(t2 + " wins!")
    }else if( st1 == st2){
        alert("It's a draw!")
        reset()
    }
}