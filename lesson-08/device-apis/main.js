


var synth = window.speechSynthesis;

function speak() {
  var textContent = document.querySelector('#text-content').value;
  var utterThis = new SpeechSynthesisUtterance(textContent);
  synth.speak(utterThis);
}
document.querySelector('#speak').addEventListener('click', speak);

function geoFindMe() {
  const status = document.querySelector('#network-status');
  const mapLink = document.querySelector('#geolocation');

  online = window.navigator.onLine;

  if (navigator.onLine) {
    status.textContent = 'Online';;
  } else {
    status.textContent = 'Offline';;
  }

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

document.querySelector('#locate-me').addEventListener('click', geoFindMe);