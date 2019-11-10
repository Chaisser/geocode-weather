const express = require("express");
const router = express.Router();
const geocode = require("./../functions/geocode");
const forecast = require("./../functions/forecast");

router.get("/weather/:location", async (req, res) => {
  const location = req.params.location;
  const language = req.query.language;
  const unit = req.query.unit;
  const period = req.query.period;

  const geoLocation = await geocode(location);
  if (!geoLocation) {
    return res.status(401).send({ status: "error" });
  }
  const { placeName, latitude, longitude } = geoLocation;
  const weather = await forecast(latitude, longitude, language, unit);
  if (!weather) {
    return res.status(401).send({ status: "error" });
  }
  const timezone = weather.timezone;

  switch (period) {
    case "currently":
      res.send({
        placeName,
        timezone,
        weather: weather.currently
      });
      break;
    case "hourly":
      res.send({
        placeName,
        timezone,
        weather: weather.hourly
      });
      break;
    case "daily":
      res.send({
        placeName,
        timezone,
        weather: weather.daily
      });
      break;
    default:
      res.send({ placeName, weather });
  }
});

module.exports = router;
