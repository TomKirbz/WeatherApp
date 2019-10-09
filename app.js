const {getWeather} = require("./getWeather.js")
const {getLocation} = require("./getLocation.js")


const main = async (place) => {
    const location = await getLocation(place);
    const weather = await getWeather(location);
    const temp = Math.round((weather.temperature - 32) * 5/9)
    const rain = Math.round(weather.precipProbability * 100)
    return {
        name: location.shortname,
        place: location.placename,
        temp: temp,
        rain: rain,
        summary: weather.summary
    }
}

module.exports = {
    main,
}


