const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const StartButton = document.getElementsByClassName("btn-start")[0];
const PauseButton = document.getElementsByClassName("btn-pause")[0];
const ContinueButton = document.getElementsByClassName("btn-continue")[0];
const RestartButton = document.getElementsByClassName("btn-restart")[0];

let seconds = 0;
minutes = 0;
hours = 0;


// setInterval(callback,1000)

const startTime = () => {
    seconds += 1;
    if(seconds === 60){
        seconds = 0;
        minutes += 1;

        if(minutes === 60){
            minutes = 0;
            hours += 1; 
        }
    }
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hoursText = hours < 10 ? "0" + hours.toString() : hours;
    stopWatchTag.textContent = hoursText + ":" + minuteText + ":" + secondText;
    console.log(hours,minutes,seconds)
}

let intervalId;
StartButton.addEventListener("click", ()=>{
    intervalId = setInterval(startTime,1000)
});
// let intervalId = setInterval(startTime,3000);
// clearInterval(intervalId);

PauseButton.addEventListener("click", () => {
    clearInterval(intervalId);
})

ContinueButton.addEventListener("click", ()=>{
    clearInterval(intervalId)
    intervalId = setInterval(startTime,1000)
});
RestartButton.addEventListener("click", ()=>{
    clearInterval(intervalId);
    seconds = 0; minutes = 0; hours = 0;
    intervalId = setInterval(startTime,1000)
});

const mytext = PauseButton.textContent;
console.log(mytext);

