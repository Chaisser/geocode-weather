const axios = require("axios");

const forecast = async (latitude, longitude, language = "en", units = "si") => {
  const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${latitude},${longitude}?lang=${language}&units=${units}`;
  const result = await axios.get(url);
  return result.data;
};

module.exports = forecast;
