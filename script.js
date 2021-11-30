function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function playSound(e) {
    let code = e.target.getAttribute("data-keyNo");
    console.log(code);
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    e.target.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

  const keys = Array.from(document.querySelectorAll('.image'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  keys.forEach(key => key.addEventListener("click", playSound));
