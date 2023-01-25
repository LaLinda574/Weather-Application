// Current Time Section in Section 2

let currentTime = new Date();
let date = currentTime.getDate();
let sec2item1 = document.querySelector("#sec2item1");
sec2item1.innerHTML = `${currentTime}`;

//5 day forecast weekdays in Sec6

function runTomorrowProgram(day) {
  if (day + 1 <= 6) {
    return [day + 1];
  } else {
    return 0;
  }
}

function run2DayProgram(day) {
  if (day + 2 <= 6) {
    return [day + 2];
  } else {
    if (day + 2 === 7) {
      return 0;
    } else {
      return 1;
    }
  }
}

function run3DayProgram(day) {
  if (day + 3 <= 6) {
    return [day + 3];
  } else {
    if (day + 3 === 7) {
      return 0;
    } else {
      if (day + 3 === 8) {
        return 1;
      } else return 2;
    }
  }
}

function run4DayProgram(day) {
  if (day + 4 <= 6) {
    return [day + 4];
  } else {
    if (day + 4 === 7) {
      return 0;
    } else {
      if (day + 4 === 8) {
        return 1;
      } else {
        if (day + 4 === 9) {
          return 2;
        } else {
          return 3;
        }
      }
    }
  }
}

function run5DayProgram(day) {
  if (day + 5 <= 6) {
    return [day + 5];
  } else {
    if (day + 5 === 7) {
      return 0;
    } else {
      if (day + 5 === 8) {
        return 1;
      } else {
        if (day + 5 === 9) {
          return 2;
        } else {
          if (day + 5 === 10) {
            return 3;
          } else {
            return 4;
          }
        }
      }
    }
  }
}

let tomorrow = document.querySelector("#sec6r2c1p1");
let day2Out = document.querySelector("#sec6r2c2p1");
let day3Out = document.querySelector("#sec6r2c3p1");
let day4Out = document.querySelector("#sec6r2c4p1");
let day5Out = document.querySelector("#sec6r2c5p1");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = currentTime.getDay(currentTime.getDate());
let tomorrowDay = runTomorrowProgram(day);
let out2Day = run2DayProgram(day);
let out3Day = run3DayProgram(day);
let out4Day = run4DayProgram(day);
let out5Day = run5DayProgram(day);
tomorrow.innerHTML = days[tomorrowDay];
day2Out.innerHTML = days[out2Day];
day3Out.innerHTML = days[out3Day];
day4Out.innerHTML = days[out4Day];
day5Out.innerHTML = days[out5Day];

// Weather Retrival Here
let apiKey = "a55a267ea76dae6beeba72af27b769dc";
let city = document.querySelector("h1");
let apiURLSearch = `https://api.openweathermap.org/data/2.5/weather?q=`;

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
let apiURLForecast = `https://api.openweathermap.org/data/2.5/forecast?`;

function showTemp(response) {
  console.log(response);
  let currentTemp = Math.round(response.data.main.temp);
  let feelsLike = Math.round(response.data.main.feels_like);
  let highTemp = Math.round(response.data.main.temp_max);
  let lowTemp = Math.round(response.data.main.temp_min);
  let currentCondition = response.data.weather[0].icon;
  let currentMainCondition = response.data.weather[0].id;
  let currentCity = response.data.name;
  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
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
  let apiKey = "a55a267ea76dae6beeba72af27b769dc";
  let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

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

  axios
    .get(`${apiURLSearch}${city}&appid=${apiKey}&units=imperial`)
    .then(showTemp);
  axios.get(forecastURL).then(fiveDayForecast);
}

//axios
// .get(`${apiURLSearch}${city}&appid=${apiKey}&units=imperial`)
//  .then(showTemp);

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

function fiveDayForecast(response) {
  console.log(response);
  let tomorrowHigh = document.querySelector("#sec6r2c1p3s1");
  let tomorrowLow = document.querySelector("#sec6r2c1p3s2");
  let day2High = document.querySelector("#sec6r2c2p3s1");
  let day2Low = document.querySelector("#sec6r2c2p3s2");
  let day3High = document.querySelector("#sec6r2c3p3s1");
  let day3Low = document.querySelector("#sec6r2c3p3s2");
  let day4High = document.querySelector("#sec6r2c4p3s1");
  let day4Low = document.querySelector("#sec6r2c4p3s2");
  let day5High = document.querySelector("#sec6r2c5p3s1");
  let day5Low = document.querySelector("#sec6r2c5p3s2");
  tomorrowHigh.innerHTML =
    "High/Low <br />" + Math.round(response.data.list[1].main.temp_max);
  tomorrowLow.innerHTML = Math.round(response.data.list[1].main.temp_min);
  day2High.innerHTML =
    "High/Low <br />" + Math.round(response.data.list[2].main.temp_max);
  day2Low.innerHTML = Math.round(response.data.list[2].main.temp_min);
  day3High.innerHTML =
    "High/Low <br />" + Math.round(response.data.list[3].main.temp_max);
  day3Low.innerHTML = Math.round(response.data.list[3].main.temp_min);
  day4High.innerHTML =
    "High/Low <br />" + Math.round(response.data.list[4].main.temp_max);
  day4Low.innerHTML = Math.round(response.data.list[4].main.temp_min);
  day5High.innerHTML =
    "High/Low <br />" + Math.round(response.data.list[5].main.temp_max);
  day5Low.innerHTML = Math.round(response.data.list[5].main.temp_min);
}
// retrieve Position Weather
function retrievePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(`${lat}, ${lon}`);
  let apiKey = "a55a267ea76dae6beeba72af27b769dc";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  axios.get(url).then(showTemp);
  axios.get(forecastURL).then(fiveDayForecast);
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
