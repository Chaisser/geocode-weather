# Geocode Weather API using MapBox and DarkSky

![](https://img.shields.io/github/stars/Chaisser/geocode-weather) ![](https://img.shields.io/github/forks/Chaisser/geocode-weather) ![](https://img.shields.io/github/issues/Chaisser/geocode-weather)

- Get weather info for place or a city.
- Get currently, daily, hourly or all types.
- Geocode API is provided by MapBox and weather API is provided by DarkSky. They are all free services.

## Usage

`GET /weather/:location` : <http://localhost:3000/weather/amsterdam>

### Params

| Params   | Description                                        | Default | Available                      |
| -------- | -------------------------------------------------- | ------- | ------------------------------ |
| language | Return summary properties in the desired language. | en      | <https://darksky.net/dev/docs> |
| unit     | Return weather conditions in the requested units.  | si      | auto, ca, uk2, us, si          |
| period   | Return weather conditions in specific period.      | -       | currently, hourly, daily       |

Dark Sky API Documentation : <https://darksky.net/dev/docs>
Map Box API Documentation: <https://docs.mapbox.com/api/>
