const url = 'https://api.openweathermap.org/data/2.5/';
const key = '34d7b73dfad5217d4b19332c0639c8a2';

const setQuery = (e) => {
    if (e.keyCode == '13')
        getResult(searcBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}

const displayResult = (result) => {
    console.log(result);
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}`;

    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(result.main.temp_min)}°c / ${Math.round(result.main.temp_max)}°c`
}


const searcBar = document.getElementById('searcBar');
searcBar.addEventListener('keypress', setQuery)