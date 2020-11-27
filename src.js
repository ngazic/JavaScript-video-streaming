window.addEventListener('load', function() {

  const video = document.querySelector('.myVideo');
  console.log(video.srcObject);
  navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
    video.srcObject = stream;
    // video.load();
    video.play();
  }
  ).catch(err => alert(err))

})