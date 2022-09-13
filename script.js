const inpText = document.querySelector('#inp__text')
const inpBtn = document.querySelector('.inp__button')

const weatherCity = document.querySelector('.weather-card__city')
const weatherTemp = document.querySelector('.weather-card__temp')
const weatherIconImg = document.querySelector('.weather-card__icon img')
const weatherStatus = document.querySelector('.weather-card__status')

const API_KEY = 'c9fb6f4dbcf4df12e20f3206cbe95a34'

const getWether = async(city) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    return await res.json()
}

inpBtn.addEventListener('click', () =>{
    getWether(inpText.value)
        .then ( (data) => {
            weatherCity.innerHTML = `${data.name} <span> ${data.sys.country} <span> `
            weatherTemp.innerText = Math.round(data.main.temp - 273.15)
            weatherIconImg.src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg`
            weatherStatus.innerText =`${data.weather[0].description}`
        })
})




