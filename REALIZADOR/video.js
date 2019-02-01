var myVideo1 = document.getElementById("video1");
var myVideo2 = document.getElementById("video2");
var myVideo3 = document.getElementById("video3");
var myVideo4 = document.getElementById("video4");
var myVideo5 = document.getElementById("video5");

var playing = false;
var looping = false;
var lowerinterval = 0;
var upperinterval = 0;
var time = 0;

setInterval(updateTimer, 10);
setInterval(rewind, 10);

function updateTimer(){
  document.getElementById("TiempoV1").innerHTML = video1.currentTime;
}

function rewind(){
  time = myVideo1.currentTime;
  if (looping && time > upperinterval){
    time = lowerinterval;
  }
}

function setParameters(){
  lowerinterval = document.getElementById("from").value;
  upperinterval = document.getElementById("to").value;
  console.log(lowerinterval,upperinterval);
}

function play(){
  myVideo1.play();
  myVideo2.play();
  myVideo3.play();
  myVideo4.play();
  myVideo5.play();
  playing = true;
}

function pause(){
  myVideo1.pause();
  myVideo2.pause();
  myVideo3.pause();
  myVideo4.pause();
  myVideo5.pause();
  playing = false;
}

function playPause() {
    if (myVideo1.paused){
        play();
        playPauseButton.textContent = "Pause";
    }else{
        pause();
        playPauseButton.textContent = "Play";
    }
}

function loopHandler() {
    if (looping){
        loopButton.textContent = "Enable Loop";
        looping = false;
    }else{
        loopButton.textContent = "Disable Loop";
        looping = true;
    }
    console.log(looping);
}

function keepFlow() {
    if (!playing){
        pause();
    }else{
        play();
    }
}

function makeBig() {
    myVideo1.width += 60;
}

function makeSmall() {
    myVideo1.width -= 60;
}

function makeNormal() {
    myVideo1.width = 540;
}

function changeVideo(value) {
  time = myVideo1.currentTime;
  myVideo1.src = "realizador-fuente"+value+".mp4";
  myVideo1.currentTime = time;
  keepFlow();
}

// function changeSpeed(value){
//   for(i = 1; i<=5; i++){
//     id = "myVideo"+i;
//     console.log(value);
//     time = id.currentTime;
//     id.defaultPlaybackRate = value;
//     id.load();
//     id.currentTime = time;
//     keepFlow();
//   }
// }

function mouseOver(value) {
  myVideo1.muted = value;
}
