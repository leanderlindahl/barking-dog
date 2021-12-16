/**
 * index.js
 * - All our useful J.es here, awesome!
 */
 function play() {
  const audio = document.getElementById("audio");
  audio.play();
}

function barkingDogClickHandler() {
  // alert("Ouch! You clicked in my face, that hurts...");
  play();
}

const dogImage = document.querySelector(".barking-dog");
if (dogImage) {
  dogImage.addEventListener("click", barkingDogClickHandler);
}
