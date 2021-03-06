const username = 'thomas';

const determineGreet = (hours) =>
  (document.getElementById('greeting').innerText = `good ${
    hours < 12 ? 'morning,' : hours < 18 ? 'afternoon,' : 'evening,'
  } ${username}.`);

window.addEventListener('load', (event) => {
  const today = new Date();
  const time = today.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' });
  determineGreet(new Date().getHours());
  document.getElementById('time').innerHTML = time;
});

setInterval(function () {
  const today = new Date();
  const time = today.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' });
  document.getElementById('time').innerHTML = time;
}, 30000);
