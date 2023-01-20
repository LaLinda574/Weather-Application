// Current Time Section

let currentTime = new Date();
let sec2item1 = document.querySelector("#sec2item1");
sec2item1.innerHTML = `${currentTime}`;

// Weather Retrival Here
let apiKey = "a55a267ea76dae6beeba72af27b769dc";
let city = document.querySelector("h1");
let apiURLSearch = `https://api.openweathermap.org/data/2.5/weather?q=`;

function showTemp(response) {
  console.log(response);
  let currentTemp = Math.round(response.data.main.temp);
  let feelsLike = Math.round(response.data.main.feels_like);
  let highTemp = Math.round(response.data.main.temp_max);
  let lowTemp = Math.round(response.data.main.temp_min);
  let currentCity = response.data.name;
  let sec5C2subC1R1c1Item1 = document.querySelector("#sec5C2subC1R1c1Item1");
  sec5C2subC1R1c1Item1.innerHTML = `Current Temperature Is <br />${currentTemp}℉`;
  let sec5C2subC1R1c2 = document.querySelector("#sec5C2subC1R1c2");
  sec5C2subC1R1c2.innerHTML = `Feels Like <br />${feelsLike}℉`;
  let sec5C2subC1R3c1 = document.querySelector("#sec5C2subC1R3c1");
  sec5C2subC1R3c1.innerHTML = `Today's High is <br />${highTemp}℉`;
  let sec5C2subC1R3c2 = document.querySelector("#sec5C2subC1R3c2");
  sec5C2subC1R3c2.innerHTML = `Today's Low is <br />${lowTemp}℉`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Current Weather in ${currentCity}`;
}

axios
  .get(`${apiURLSearch}${city}&appid=${apiKey}&units=imperial`)
  .then(showTemp);

// Search Form Here
function search(event) {
  event.preventDefault();
  let newCity = document.querySelector("#search-city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Current Weather for ${newCity.value}`;
  console.log(newCity.value);
  axios
    .get(`${apiURLSearch}${newCity.value}&appid=${apiKey}&units=imperial`)
    .then(showTemp);
}

// retrieve Position Weather
function retrievePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(`${lat}, ${lon}`);
  let apiKey = "a55a267ea76dae6beeba72af27b769dc";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  axios.get(url).then(showTemp);
}

//locate User Function

function locateUser() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let form = document.querySelector("#newCitySearchForm");
form.addEventListener("submit", search);

let button = document.querySelector("#geoLocation");
button.addEventListener("click", locateUser);
