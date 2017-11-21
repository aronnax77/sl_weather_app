/* Author: Richard Myatt
     Date: 20 November 2017

An exercise.  A weather app for SL.  This could be extended to include geo
location to determine the local weather but this requires https support and
does not appear to be something for which the code playground can be used.
*/

// Set default coordinates to Kuala Lumpur, Malaysia
var coords = '51.5324257, -0.48068269999999996';
var lat    = '3.1390';
var long   = '101.6869';
var str    = 'current?lon=' + long + '&' + 'lat=' + lat;
var url    = 'https://fcc-weather-api.glitch.me/api/' + str;
var responseObj;

var place = document.querySelector('.local');
var temp = document.querySelector('.temperature');
var desc = document.querySelector('.description');
var icon = document.querySelector('img');
var anchor = document.querySelector('a');
var elLt = document.querySelector('.lat');
var elLg = document.querySelector('.long');

// Converts temperature from celcius to fahrenheit
function convertTemp() {
  if(anchor.textContent == 'C') {
    temp.textContent = (temp.textContent * 9 /5 + 32).toFixed(2);
    anchor.textContent = 'F';
  } else {
    temp.textContent = responseObj.main.temp;
  }
}

// this function runs when the form button is pressed
function getStats() {
  alert('In getStats');
  var lt = elLt.value;
  var lg = elLg.value;
  alert(lt + ' || ' + lg);
  if(lt && lg && lt <= 360 && lt >= -360 && lg <= 360 && lg >= -360) {
    lat = lt;
    long = lg;
    alert('over init');
    str    = 'current?lon=' + long + '&' + 'lat=' + lat;
    url    = 'https://fcc-weather-api.glitch.me/api/' + str;
    init();
  } else {
    alert('Values must be numeric between -360 and 360.\nPlease try again');
  }
}

// This function initializes the app onload and also updates the weather if
// valid coordinates are entered.
function init() {
  var request = new XMLHttpRequest();

  request.open('GET', url);
  request.response = 'text';
  request.send();

  request.onreadystatechange = function() {
    //alert(request.readyState);
    if (request.readyState === 4) {
      if (request.status === 200) {
        responseObj = JSON.parse(request.response);
      } else {
        alert('There was a problem with the request.');
      }

    place.textContent = responseObj.name + ', ' + responseObj.sys.country;
    temp.textContent = responseObj.main.temp;
    desc.textContent = responseObj.weather[0].description;
    icon.setAttribute('src', responseObj.weather[0].icon);
    elLt.value = '';
    elLg.value = '';
    }
  };
}

window.onload = init();
