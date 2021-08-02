// Change this to your username
const username = 'thomas';

if (localStorage.getItem('data') == null) var mode = 'dark';
else mode = localStorage.getItem('data');

const determineGreet = (hours) =>
  (document.getElementById('greeting').innerText = `Good ${
    hours < 12 ? 'Morning,' : hours < 18 ? 'Afternoon,' : 'Evening,'
  } ${username}.`);

// The same as "onload"
window.addEventListener('load', (event) => {
  const today = new Date();
  const time = today.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' });
  change_colors(mode);
  determineGreet(new Date().getHours());
  displayTime(time);
});

setInterval(function () {
  const today = new Date();
  const time = today.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' });
  document.getElementById('time').innerHTML = time;
}, 1000);

document.getElementById('mode').addEventListener('click', function () {
  if (mode == 'dark') {
    change_colors('light');
    localStorage.setItem('data', 'light');
    data = localStorage.getItem('data');
    mode = data;
  } else {
    change_colors('dark');
    localStorage.setItem('data', 'dark');
    data = localStorage.getItem('data');
    mode = data;
  }
});

function displayTime(time) {
  document.getElementById('time').innerHTML = time;
}

function dark_colors() {
  const link = document.getElementsByTagName('a');
  const mode_id = document.getElementById('mode');
  document.body.style.background = '#0C131F';
  document.getElementById('greeting').style.color = '#dee3de';
  mode_id.src = 'ico/light.png';
  mode_id.style.filter = 'invert(100%) sepia(0%) saturate(1620%) hue-rotate(8deg) brightness(94%) contrast(88%)';
  for (i = 0; i < link.length; i++) link[i].style.color = '#bbb';
}

function light_colors() {
  const link = document.getElementsByTagName('a');
  const mode_id = document.getElementById('mode');
  document.body.style.background = '#282828';
  document.getElementById('greeting').style.color = '#767283';
  mode_id.src = 'ico/dark.png';
  mode_id.style.filter = 'invert(58%) sepia(12%) saturate(482%) hue-rotate(148deg) brightness(94%) contrast(86%)';
  for (i = 0; i < link.length; i++) link[i].style.color = '#767283';
}

function change_colors(mode) {
  if (mode == 'dark') light_colors();
  else dark_colors();
}
