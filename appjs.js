const cityInput = document.querySelector("cityInput");

const form = document.querySelector("#enterCity");

const cityName = document.querySelector("#city_name");
const time = document.querySelector("#time");
const temperature = document.querySelector("#temp");

const card = document.querySelector("#weather-card");

const updateInfo = (data) => {
  //   console.log(data);
  const city = data.cityDetails;
  const weather = data.weather;

  cityName.textContent = city.EnglishName;
  const date = new Date(weather.LocalObservationDateTime);
  time.textContent = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  temperature.textContent = weather.Temperature.Metric.Value;

  if (card.classList.contains("hidden")) {
    card.classList.remove("hidden");
  }
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);

  const weather = await getWeather(cityDetails.Key);

  return {
    cityDetails: cityDetails,
    weather: weather,
  };
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredCity = form.city.value.trim();

  form.reset();

  updateCity(enteredCity)
    .then((data) => {
      updateInfo(data);
    })
    .catch((error) => {
      console.log("error updating city", error);
    });
});
