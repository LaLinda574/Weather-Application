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

//Five Day Forcast Icon Reference
// --- Clear Sun --- <i class="fa=regular fa-sun"></i>
// --- Partly Cloudy --- <i class="fa-solid fa-cloud-sun"></i>
// --- Cloudy --- <i class="fa-solid fa-cloud"></i>
// --- Lightning --- <i class="fa-solid fa-bolt"></i>
// --- Rain --- <i class="fa-solid fa-cloud-showers-heavy"></i>
// ---Snow --- <i class="fa-regular fa-snowflake"></i>
// ---Tornado --- <i class="fa-solid fa-tornado"></i>
// ---Smoke/Fog --- <i class="fa-solid fa-smog"></i>

function iconRetrieval(iconID) {
  if (iconID === "01d") {
    return `<i class="fa-regular fa-sun"></i>`;
  } else {
    if (iconID === "01n") {
      return `<i class="fa-regular fa-sun"></i>`;
    } else {
      if (iconID === "02d") {
        return `<i class="fa-solid fa-cloud-sun"></i>`;
      } else {
        if (iconID === "02n") {
          return `<i class="fa-solid fa-cloud-sun"></i>`;
        } else {
          if (iconID === "03d") {
            return `<i class="fa-solid fa-cloud-sun"></i>`;
          } else {
            if (iconID === "03n") {
              return `<i class="fa-solid fa-cloud-sun"></i>`;
            } else {
              if (iconID === "04d") {
                return `<i class="fa-solid fa-cloud"></i>`;
              } else {
                if (iconID === "04n") {
                  return `<i class="fa-solid fa-cloud"></i>`;
                } else {
                  if (iconID === "11d") {
                    return `<i class="fa-solid fa-bolt"></i>`;
                  } else {
                    if (iconID === "09d") {
                      return `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
                    } else {
                      if (iconID === "10d") {
                        return `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
                      } else {
                        if (iconID === "13d") {
                          return `<i class="fa-regular fa-snowflake"></i>`;
                        } else {
                          if (iconID === "781") {
                            return `<i class="fa-solid fa-tornado"></i>`;
                          } else {
                            return `<i class="fa-solid fa-smog"></i>`;
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
                    if (currentCondition === "11n") {
                      currentConditionImage.innerHTML = `<img src="img/thunderstorm.png" alt="Thunderstorm" />`;
                    } else {
                      if (currentCondition === "09n") {
                        currentConditionImage.innerHTML = `<img src="img/drizzle.png" alt="Drizzle" />`;
                      } else {
                        if (currentCondition === "09d") {
                          currentConditionImage.innerHTML = `<img src="img/drizzle.png" alt="Drizzle" />`;
                        } else {
                          if (currentCondition === "10d") {
                            currentConditionImage.innerHTML = `<img src="img/rain.png" alt="Rain" />`;
                          } else {
                            if (currentCondition === "10n") {
                              currentConditionImage.innerHTML = `<img src="img/rain.png" alt="Rain" />`;
                            } else {
                              if (currentCondition === "13n") {
                                currentConditionImage.innerHTML = `<img src="img/snow.png" alt="Snow" />`;
                              } else {
                                if (currentCondition === "13d") {
                                  currentConditionImage.innerHTML = `<img src="img/snow.png" alt="Snow" />`;
                                } else {
                                  if (currentMainCondition === "781") {
                                    currentConditionImage.innerHTML = `<img src="img/tornado.png" alt="Tornado" />`;
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
      }
    }
  }

  axios
    .get(`${apiURLSearch}${city}&appid=${apiKey}&units=imperial`)
    .then(showTemp);
  axios.get(forecastURL).then(fiveDayForecast);

  todayFahrenheitNow = response.data.main.temp;
  todayFahrenheitFeel = response.data.main.feels_like;
  todayFahrenheitHigh = response.data.main.temp_max;
  todayFahrenheitLow = response.data.main.temp_min;
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
  let tomorrowIcon = document.querySelector("#sec6r2c1p2");
  let day2Icon = document.querySelector("#sec6r2c2p2");
  let day3Icon = document.querySelector("#sec6r2c3p2");
  let day4Icon = document.querySelector("#sec6r2c4p2");
  let day5Icon = document.querySelector("#sec6r2c5p2");
  let tomorrowCondition = response.data.list[1].weather[0].icon;
  let day2Condition = response.data.list[2].weather[0].icon;
  let day3Condition = response.data.list[3].weather[0].icon;
  let day4Condition = response.data.list[4].weather[0].icon;
  let day5Condition = response.data.list[5].weather[0].icon;

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

  tomorrowIcon.innerHTML = iconRetrieval(tomorrowCondition);
  day2Icon.innerHTML = iconRetrieval(day2Condition);
  day3Icon.innerHTML = iconRetrieval(day3Condition);
  day4Icon.innerHTML = iconRetrieval(day4Condition);
  day5Icon.innerHTML = iconRetrieval(day5Condition);

  tomorrowFahrenheitHigh = response.data.list[1].main.temp_max;
  tomorrowFahrenheitLow = response.data.list[1].main.temp_min;
  day2FahrenheitHigh = response.data.list[2].main.temp_max;
  day2FahrenheitLow = response.data.list[2].main.temp_min;
  day3FahrenheitHigh = response.data.list[3].main.temp_max;
  day3FahrenheitLow = response.data.list[3].main.temp_min;
  day4FahrenheitHigh = response.data.list[4].main.temp_max;
  day4FahrenheitLow = response.data.list[4].main.temp_min;
  day5FahrenheitHigh = response.data.list[5].main.temp_max;
  day5FahrenheitLow = response.data.list[5].main.temp_min;
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

function convertTempCelcius(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#sec5C2subC1R1c1Item1");
  let feelsLike = document.querySelector("#sec5C2subC1R1c2");
  let highTemp = document.querySelector("#sec5C2subC1R3c1");
  let lowTemp = document.querySelector("#sec5C2subC1R3c2");
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
  currentTemp.innerHTML = Math.round((todayFahrenheitNow - 32) * (5 / 9)) + "℃";
  feelsLike.innerHTML = Math.round((todayFahrenheitFeel - 32) * (5 / 9)) + "℃";
  highTemp.innerHTML = Math.round((todayFahrenheitHigh - 32) * (5 / 9)) + "℃";
  lowTemp.innerHTML = Math.round((todayFahrenheitLow - 32) * (5 / 9)) + "℃";
  tomorrowHigh.innerHTML =
    Math.round((tomorrowFahrenheitHigh - 32) * (5 / 9)) + "℃";
  tomorrowLow.innerHTML =
    Math.round((tomorrowFahrenheitLow - 32) * (5 / 9)) + "℃";
  day2High.innerHTML = Math.round((day2FahrenheitHigh - 32) * (5 / 9)) + "℃";
  day2Low.innerHTML = Math.round((day2FahrenheitLow - 32) * (5 / 9)) + "℃";
  day3High.innerHTML = Math.round((day3FahrenheitHigh - 32) * (5 / 9)) + "℃";
  day3Low.innerHTML = Math.round((day3FahrenheitLow - 32) * (5 / 9)) + "℃";
  day4High.innerHTML = Math.round((day4FahrenheitHigh - 32) * (5 / 9)) + "℃";
  day4Low.innerHTML = Math.round((day4FahrenheitLow - 32) * (5 / 9)) + "℃";
  day5High.innerHTML = Math.round((day5FahrenheitHigh - 32) * (5 / 9)) + "℃";
  day5Low.innerHTML = Math.round((day5FahrenheitLow - 32) * (5 / 9)) + "℃";

  todayCelciusNow = (todayFahrenheitNow - 32) * (5 / 9);
  todayCelciusFeel = (todayFahrenheitFeel - 32) * (5 / 9);
  todayCelciusHigh = (todayFahrenheitHigh - 32) * (5 / 9);
  todayCelciusLow = (todayFahrenheitLow - 32) * (5 / 9);
  tomorrowCelciusHigh = (tomorrowFahrenheitHigh - 32) * (5 / 9);
  tomorrowCelciusLow = (tomorrowFahrenheitLow - 32) * (5 / 9);
  day2CelciusHigh = (day2FahrenheitHigh - 32) * (5 / 9);
  day2CelciusLow = (day2FahrenheitLow - 32) * (5 / 9);
  day3CelciusHigh = (day3FahrenheitHigh - 32) * (5 / 9);
  day3CelciusLow = (day3FahrenheitLow - 32) * (5 / 9);
  day4CelciusHigh = (day4FahrenheitHigh - 32) * (5 / 9);
  day4CelciusLow = (day4FahrenheitLow - 32) * (5 / 9);
  day5CelciusHigh = (day5FahrenheitHigh - 32) * (5 / 9);
  day5CelciusLow = (day5FahrenheitLow - 32) * (5 / 9);
}

function convertTempFahrenheit(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#sec5C2subC1R1c1Item1");
  let feelsLike = document.querySelector("#sec5C2subC1R1c2");
  let highTemp = document.querySelector("#sec5C2subC1R3c1");
  let lowTemp = document.querySelector("#sec5C2subC1R3c2");
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
  currentTemp.innerHTML = Math.round(todayCelciusNow * 1.8 + 32) + "℉";
  feelsLike.innerHTML = Math.round(todayCelciusFeel * 1.8 + 32) + "℉";
  highTemp.innerHTML = Math.round(todayCelciusHigh * 1.8 + 32) + "℉";
  lowTemp.innerHTML = Math.round(todayCelciusLow * 1.8 + 32) + "℉";
  tomorrowHigh.innerHTML = Math.round(tomorrowCelciusHigh * 1.8 + 32) + "℉";
  tomorrowLow.innerHTML = Math.round(tomorrowCelciusLow * 1.8 + 32) + "℉";
  day2High.innerHTML = Math.round(day2CelciusHigh * 1.8 + 32) + "℉";
  day2Low.innerHTML = Math.round(day2CelciusLow * 1.8 + 32) + "℉";
  day3High.innerHTML = Math.round(day3CelciusHigh * 1.8 + 32) + "℉";
  day3Low.innerHTML = Math.round(day3CelciusLow * 1.8 + 32) + "℉";
  day4High.innerHTML = Math.round(day4CelciusHigh * 1.8 + 32) + "℉";
  day4Low.innerHTML = Math.round(day4CelciusLow * 1.8 + 32) + "℉";
  day5High.innerHTML = Math.round(day5CelciusHigh * 1.8 + 32) + "℉";
  day5Low.innerHTML = Math.round(day5CelciusLow * 1.8 + 32) + "℉";

  todayFahrenheitNow = Math.round(todayCelciusNow * 1.8 + 32);
  todayFahrenheitFeel = Math.round(todayCelciusFeel * 1.8 + 32);
  todayFahrenheitHigh = Math.round(todayCelciusHigh * 1.8 + 32);
  todayFahrenheitLow = Math.round(todayCelciusLow * 1.8 + 32);
  tomorrowFahrenheitHigh = Math.round(tomorrowCelciusHigh * 1.8 + 32);
  tomorrowFahrenheitLow = Math.round(tomorrowCelciusLow * 1.8 + 32);
  day2FahrenheitHigh = Math.round(day2CelciusHigh * 1.8 + 32);
  day2FahrenheitLow = Math.round(day2CelciusLow * 1.8 + 32);
  day3FahrenheitHigh = Math.round(day3CelciusHigh * 1.8 + 32);
  day3FahrenheitLow = Math.round(day3CelciusLow * 1.8 + 32);
  day4FahrenheitHigh = Math.round(day4CelciusHigh * 1.8 + 32);
  day4FahrenheitLow = Math.round(day4CelciusLow * 1.8 + 32);
  day5FahrenheitHigh = Math.round(day5CelciusHigh * 1.8 + 32);
  day5FahrenheitLow = Math.round(day5CelciusLow * 1.8 + 32);
}

let todayFahrenheitNow = null;
let todayFahrenheitFeel = null;
let todayFahrenheitHigh = null;
let todayFahrenheitLow = null;
let tomorrowFahrenheitHigh = null;
let tomorrowFahrenheitLow = null;
let day2FahrenheitHigh = null;
let day2FahrenheitLow = null;
let day3FahrenheitHigh = null;
let day3FahrenheitLow = null;
let day4FahrenheitHigh = null;
let day4FahrenheitLow = null;
let day5FahrenheitHigh = null;
let day5FahrenheitLow = null;

let todayCelciusNow = null;
let todayCelciusFeel = null;
let todayCelciusHigh = null;
let todayCelciusLow = null;
let tomorrowCelciusHigh = null;
let tomorrowCelciusLow = null;
let day2CelciusHigh = null;
let day2CelciusLow = null;
let day3CelciusHigh = null;
let day3CelciusLow = null;
let day4CelciusHigh = null;
let day4CelciusLow = null;
let day5CelciusHigh = null;
let day5CelciusLow = null;

let form = document.querySelector("#newCitySearchForm");
form.addEventListener("submit", search);

let button = document.querySelector("#geoLocation");
button.addEventListener("click", locateUser);

let celciusButton = document.querySelector("#sec5Button");
celciusButton.addEventListener("click", convertTempCelcius);

let fahrenheitButton = document.querySelector("#sec5Button2");
fahrenheitButton.addEventListener("click", convertTempFahrenheit);
