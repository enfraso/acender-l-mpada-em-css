const lamp = document.getElementById('lamp');
let isLightOn = false;

function toggleLight() {
  isLightOn = !isLightOn;
  lamp.classList.toggle('light-on', isLightOn);
  updateBulb();
}

function updateBulb() {
  const bulb = lamp.querySelector('.bulb');
  if (isLightOn) {
    if (!bulb) {
      createBulb();
    }
  } else {
    if (bulb) {
      bulb.remove();
    }
  }
}

function createBulb() {
  const bulb = document.createElement('div');
  bulb.classList.add('bulb');
  lamp.appendChild(bulb);
}
