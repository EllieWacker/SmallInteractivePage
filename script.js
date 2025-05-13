function changeButtonTextAndToggleMickeyAndPlayMusic() {
  if (mickey_button.textContent == "Hello!") {
    mickey_button.textContent = "Click to see a friend!";
  } else {
    mickey_button.textContent = "Hello!";
  }
  toggleMickey();
  playMickeySound();
}

function toggleMickey() {
  mickey.classList.toggle("visible");
}

function playMickeySound() {
  if (mickey_button.textContent == "Hello!") {
    mickey_music.play();
  } else {
    mickey_music.pause();
  }
}


function changeButtonTextAndToggleStitchAndPlayMusic() {
  if (stitch_button.textContent == "Aloha!") {
    stitch_button.textContent = "Click to see another friend!";
  } else {
    stitch_button.textContent = "Aloha!";
  } toggleStitch();
  playStitchSound();
}

function toggleStitch() {
  stitch.classList.toggle("visible");
}

function playStitchSound() {
  if (stitch_button.textContent == "Aloha!") {
    stitch_music.play();
  } else {
    stitch_music.pause();
  }
}


function changeButtonTextAndTogglePoohAndPlayMusic() {
  if (pooh_button.textContent == "Good day!") {
    pooh_button.textContent = "Click to see a final friend!";
  }
  else {
    pooh_button.textContent = "Good day!";
  }
  togglePooh();
  playPoohSound();
}

function togglePooh() {
  pooh.classList.toggle("visible");
}

function playPoohSound() {
  if (pooh_button.textContent == "Good day!") {
    pooh_music.play();
  } else {
    pooh_music.pause();
  }
}

mickey_button.onclick = changeButtonTextAndToggleMickeyAndPlayMusic;
stitch_button.onclick = changeButtonTextAndToggleStitchAndPlayMusic;
pooh_button.onclick = changeButtonTextAndTogglePoohAndPlayMusic;
