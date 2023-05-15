//c6abca034fbc209a8adbc0d0c5f38b69
const apiKey = "c6abca034fbc209a8adbc0d0c5f38b69"

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")
const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")

const weatherContainer = document.querySelector("#weather-data")


const getWeatherData = async (city)=>{
    const apiWeatherURl = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt-br` 


    const res = await fetch(apiWeatherURl)
    const data = await res.json()
    
    return data

}
const showWeatherData =  async(city) =>{

    const data = await getWeatherData(city);

    cityElement.innerText = data.name
    tempElement.innerText = parseInt(data.main.temp)
    descElement.innerText = data.weather[0].description
    weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png` ) 
    umidityElement.innerText = `${data.main.humidity}%` 
    windElement.innerText = `${data.wind.speed}km/h`

    weatherIconElement.classList.remove("hide")
}


searchBtn.addEventListener("click", (e) =>{

   e.preventDefault()

   const city = cityInput.value

   showWeatherData(city)
})