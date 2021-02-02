function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    
    if (e.target.classList.contains('white')){
        e.target.classList.remove('playing-white');
    }
    else {
        e.target.classList.remove('playing-black');
    }
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) {
        return;
    }
    else {
        if (key.classList.contains('white')){
            key.classList.add('playing-white');
        }
        else{
            key.classList.add('playing-black');
        }
        audio.currentTime = 0;
        audio.play();
    }
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);