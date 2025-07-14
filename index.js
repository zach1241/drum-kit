var drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

function playSound(key) {
  switch (key) {
    case "w":
      new Audio("./sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("./sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("./sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("./sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("./sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("./sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("./sounds/tom-4.mp3").play();
      break;
    default:
      console.log("Unbound key:", key);
  }
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key); // 💥 Add this line
});


//button Animation
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  if (activeButton) {
    activeButton.classList.add("pressed");

    // Remove the class after 100ms
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
