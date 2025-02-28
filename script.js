let timer;
let startTime;
let elapsedTime = 0;
let running = false;

function startTimer() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTimer, 10);
        running = true;
    }
}

function stopTimer() {
    if (running) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        running = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    elapsedTime = 0;
    running = false;
    document.getElementById("timer").innerText = "00:00:00:00";
}

function updateTimer() {
    elapsedTime = Date.now() - startTime;
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;

    document.getElementById("timer").innerText = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}