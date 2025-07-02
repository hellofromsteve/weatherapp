const key = "BCnscbV48wVVyrjqZ7Mh2p1eLgcKvJKv";

// get weather
const getWeather = async (location) => {
  const url = "http://dataservice.accuweather.com/currentconditions/v1/";

  const query = `${location}?apikey=${key}`;

  const response = await fetch(url + query);

  const weatherData = await response.json();

  return weatherData[0];
};

// city information
const getCity = async (city) => {
  const url = "http://dataservice.accuweather.com/locations/v1/cities/search";

  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(url + query);

  const cityData = await response.json();

  return cityData[0];
};

/*

getCity("accra")
  .then((cityData) => {
    return getWeather(cityData.Key);
  })
  .then((weatherData) => {
    return weatherData;
  })
  .catch((error) => {
    console.log("error fetching data", error);
  });

getWeather("178551");

*/
