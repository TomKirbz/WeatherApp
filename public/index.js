const imgs = ["rain.png", "sunny.png","cloudy.png", "partly_cloudy.png", "rain_icon.png", "overcast.png", "light_rain.png"]
const rainIcon = document.getElementById("rain-icon")
const weatherImage = document.getElementById("weatherImg")
const button = document.getElementById("button")
const input = document.getElementById("location")
const locationTitle = document.getElementById("locationTitle")
const temp = document.getElementById("temp")
const rain = document.getElementById("rain")
const sum = document.getElementById("sum")
const name = document.getElementById("shortname")
const degrees = document.getElementById("degree-text")
const percentage = document.getElementById("per-text")
const mainContainer = document.querySelector(".main-container")

button.addEventListener("click", async ()=> {
    locationTitle.innerText = "Loading...";
    temp.innerText = " ";
    rain.innerText = " ";
    sum.innerText = " ";

    let response = await fetch(`/weather?location=${input.value}`)
    let data = await response.json()

    name.innerText = data.name
    locationTitle.innerText = data.place
    temp.innerText = data.temp
    degrees.innerText = "°C"
    if (data.summary === "Clear" ) {
        weatherImage.src = `./icons/${imgs[1]}`
    } else if (data.summary === "Rain" ) {
        weatherImage.src = `./icons/${imgs[5]}`
        mainContainer.style.backgroundImage = "url('/rainBG.jpg')"
    } else if (data.summary === "Mostly Cloudy" || data.summary === "Cloudy" ) {
        weatherImage.src = `./icons/${imgs[2]}`
        mainContainer.style.backgroundImage = "url('/mostly_cloudy.jpg')"
    } else if (data.summary === "Partly Cloudy" ) {
        weatherImage.src = `./icons/${imgs[3]}`
        mainContainer.style.backgroundImage = "url('/partlycloudyBG.jpg')"
    } else if (data.summary === "Overcast" ) {
        weatherImage.src = `./icons/${imgs[5]}`
        mainContainer.style.backgroundImage = "url('/overcastBG.jpg')"
    } else if (data.summary === "Light Rain" ) {
        weatherImage.src = `./icons/${imgs[6]}`
        mainContainer.style.backgroundImage = "url('/lightRainBG.jpg')"
    }

    rain.innerText = data.rain
    percentage.innerText = "% "
    rainIcon.src = `./icons/${imgs[0]}`
    sum.innerText = data.summary
})

// sleet, snow, wind, fog,


    

