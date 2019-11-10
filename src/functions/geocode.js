const axios = require("axios");

const geocode = async location => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=${process.env.MAPBOX_API_KEY}`;
  try {
    const result = await axios.get(url);
    return {
      placeName: result.data.features[0].place_name,
      longitude: result.data.features[0].center[0],
      latitude: result.data.features[0].center[1]
    };
  } catch (err) {
    console.log(err, "hata");
  }
};

module.exports = geocode;
