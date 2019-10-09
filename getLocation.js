const {promisify} = require("util")  
const request = require("request")
const promisifiedRequest =  promisify(request)
const {locationApi} = require("./keys")



const getLocation = async (place) => {
    try {
        let data =  await promisifiedRequest({url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${locationApi}`, json: true})
        return ({
            shortname: data.body.features[0].text,
            placename: data.body.features[0].place_name,
            lat: data.body.features[0].center[0], 
            long: data.body.features[0].center[1]
        })
    } catch (error) {
        console.log("There's an Error, No dino game though :(")
    }
}

module.exports = {
    getLocation,
}
