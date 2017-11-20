// 51.5074° N, 0.1278° W

var coords = '51.5324257, -0.48068269999999996';
var lat    = '51.5324257';
var long   = '-0.48068269999999996';
var str    = 'current?lon=' + long + '&' + 'lat=' + lat;
var url    = 'https://fcc-weather-api.glitch.me/api/' + str;
var responseObj;

var elh1 = document.querySelector('h1');
var elh2 = document.querySelector('h2');
var elp  = document.querySelector('p');
var place = document.querySelector('#place');
var temp = document.querySelector('#temperature');
var desc = document.querySelector('#description');
var icon = document.querySelector('img');
elh1.textContent = str;
elh2.textContent = url;

/*var request = new XMLHttpRequest();

request.open('GET', url);
request.response = 'text';
request.send();

request.onreadystatechange = function() {
  //alert(request.readyState);
  if (request.readyState === 4) {
    if (request.status === 200) {
      responseObj = JSON.parse(request.response);
      elp.textContent = request.response;
    } else {
      alert('There was a problem with the request.');
    }

  place.textContent = responseObj.name + ', ' + responseObj.sys.country;
  temp.textContent = responseObj.main.temp;
  desc.textContent = responseObj.weather[0].description;
  icon.setAttribute('src', responseObj.weather[0].icon);
  }
};*/
