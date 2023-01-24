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
  let currentCondition = response.data.weather[0].icon;
  let currentMainCondition = response.data.weather[0].id;
  let currentCity = response.data.name;
  let sec5C2subC1R1c1Item1 = document.querySelector("#sec5C2subC1R1c1Item1");
  sec5C2subC1R1c1Item1.innerHTML = `${currentTemp}℉`;
  let sec5C2subC1R1c2 = document.querySelector("#sec5C2subC1R1c2");
  sec5C2subC1R1c2.innerHTML = `${feelsLike}℉`;
  let sec5C2subC1R3c1 = document.querySelector("#sec5C2subC1R3c1");
  sec5C2subC1R3c1.innerHTML = `${highTemp}℉`;
  let sec5C2subC1R3c2 = document.querySelector("#sec5C2subC1R3c2");
  sec5C2subC1R3c2.innerHTML = `${lowTemp}℉`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Current Weather in ${currentCity}`;
  let currentConditionImage = document.querySelector("#sec5C1Image");

  if (currentCondition === "01d") {
    currentConditionImage.innerHTML = `<img src="img/clear_sky.png" alt="Clear Sky" />`;
  } else {
    if (currentCondition === "01n") {
      currentConditionImage.innerHTML = `<img src="img/clear_sky.png" alt="Clear Sky" />`;
    } else {
      if (currentCondition === "02d") {
        currentConditionImage.innerHTML = `<img src="img/partly_cloudy.png" alt="Partly Cloudy" />`;
      } else {
        if (currentCondition === "02n") {
          currentConditionImage.innerHTML = `<img src="img/partly_cloudy.png" alt="Partly Cloudy" />`;
        } else {
          if (currentCondition === "03d") {
            currentConditionImage.innerHTML = `<img src="img/partly_cloudy.png" alt="Partly Cloudy" />`;
          } else {
            if (currentCondition === "03n") {
              currentConditionImage.innerHTML = `<img src="img/partly_cloudy.png" alt="Partly Cloudy" />`;
            } else {
              if (currentCondition === "04d") {
                currentConditionImage.innerHTML = `<img src="img/cloudy.png" alt="Cloudy" />`;
              } else {
                if (currentCondition === "04n") {
                  currentConditionImage.innerHTML = `<img src="img/cloudy.png" alt="Cloudy" />`;
                } else {
                  if (currentCondition === "11d") {
                    currentConditionImage.innerHTML = `<img src="img/thunderstorm.png" alt="Thunderstorm" />`;
                  } else {
                    if (currentCondition === "09d") {
                      currentConditionImage.innerHTML = `<img src="img/drizzle.png" alt="Drizzle" />`;
                    } else {
                      if (currentCondition === "10d") {
                        currentConditionImage.innerHTML = `<img src="img/rain.png" alt="Rain" />`;
                      } else {
                        if (currentCondition === "13d") {
                          currentConditionImage.innerHTML = `<img src="img/snow.png" alt="Snow" />`;
                        } else {
                          if (currentMainCondition === "781") {
                            currentConditionImage.innerHTML = `<img src="img/snow.png" alt="Tornado" />`;
                          } else {
                            currentConditionImage.innerHTML = `<img src="img/haze.png" alt="Haze/Fog/Smoke"`;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
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

//Five Day Forcast Icon Reference
// --- Clear Sun --- <i class="fa=regular fa-sun"></i>
// --- Partly Cloudy --- <i class="fa-solid fa-cloud-sun"></i>
// --- Cloudy --- <i class="fa-solid fa-cloud"></i>
// --- Lightning --- <i class="fa-solid fa-bolt"></i>
// --- Rain --- <i class="fa-solid fa-cloud-showers-heavy"></i>
// ---Snow --- <i class="fa-regular fa-snowflake"></i>
