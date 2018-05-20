// Axios is a third party library for making API calls
var axios = require('axios');

// Generate the Base URL - Use immutable "const" keyword as seen below
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4e5f12a1a5f73912d47393622501bdd4&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    // New javascript feature called "Query Strings" to help create URLs that are easy for humans to understand
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    // This first promise sifts through the server response
    return axios.get(requestUrl).then(function (res) {
      debugger;
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function () {
      throw new Error('Unable to fetch weather');
      // throw new Error(err.response.data.message);
    });
  }
}
