const stopWatchTag = document.getElementsByClassName("stopwatch")[0];
const containerTag = document.getElementsByClassName("container")[0];
console.log(containerTag)
const startTag = document.getElementsByClassName("start")[0];
const pauseTag = document.getElementsByClassName("pause")[0];
const continueTag = document.getElementsByClassName("continue")[0];
const restartTag = document.getElementsByClassName("restart")[0];
const milisecondsTag = document.getElementsByTagName("span")[0];
console.log(startTag,pauseTag,continueTag,restartTag);

let miliseconds = 0,seconds = 0 , minutes = 0 , hours = 0;

// setInterval(callback,delay)

const startTime = () => {
    console.log("This function was called...");
    miliseconds += 10;
    if( miliseconds === 1000){
        miliseconds = 0;
        seconds += 1;

        if(seconds === 60){
            seconds = 0;
            minutes += 1;
        }
        if(minutes === 60){
            minutes = 0;
            hours += 1;
        }
    }
    const milisecondsText = miliseconds < 10 ? "0" + miliseconds.toString() : miliseconds ;
    const secondsText = seconds < 10 ? "0" +seconds.toString() : seconds;
    const minutesText = minutes < 10 ? "0" +minutes.toString() : minutes;
    const hoursText = hours < 10 ? "0" +hours.toString() : hours;
    stopWatchTag.textContent = `${hoursText} : ${minutesText} : ${secondsText} ${milisecondsText}`
}
// setInterval(startTime,1)
let intervalId;
// const intervalId =setInterval(startTime,1000);
startTag.addEventListener("click", () => {
    intervalId = setInterval(startTime,100)
})

pauseTag.addEventListener("click", () => {
    clearInterval(intervalId)
});
continueTag.addEventListener("click", () => {
    clearInterval(intervalId)
    intervalId = setInterval(startTime,1000)
})
restartTag.addEventListener("click", () => {
    seconds = 0, minutes = 0, hours = 0;
    clearInterval(intervalId)
    intervalId = setInterval(startTime,1000)
})