var revealed = true;
var i = 0;
setTimeout(function () {
  document.querySelector('.welcome-section h1:nth-child(7)').velocity({ opacity: 0 }, {duration: 3000});

}, 800)
function fadeOutEffect() {
  window.location.href = "/index.html#video";
    var fadeTarget = document.getElementById("welcome");
    var videoDiv = document.getElementById("video-div");
    var video = document.getElementById("main-video");
    fadeTarget.velocity({ opacity: 0 }, { display: "none" }, {duration: 800});
    videoDiv.velocity({ opacity: 1 }, {width: '80%'}, {duration: 1200})
    videoDiv.velocity({ width: '80%' }, {duration: 500})
    setTimeout(function (){
        video.play()
    },900)
    revealed = false;
  }
  setInterval(() => {
    if (revealed) {
      i++;
      if(i == 8)
      {
        i = 1
      }
      document.querySelector('.welcome-section h1:nth-child('+i+')').velocity({ opacity: 1 }, {duration: 2000});
      document.querySelector('.welcome-section h1:nth-child('+i+')').velocity({ opacity: 0 }, {duration: 1000});

    } else {
      console.log("element hasn't been clicked yet");
    }
  }, 3000); // 👉️ invoke every 1500 milliseconds


document.getElementById("welcome").addEventListener("click", fadeOutEffect)


