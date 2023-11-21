const apiKey = "6ac4fcf3a78c38c1f4dba4884b31a9ae";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.getElementById("input");
const searchBtn = document.getElementById("btn");
const searchLocation = document.getElementById("location");
const weatherImg = document.querySelector(".weather-img");
const weatherDiv = document.querySelector(".weather");

let cities = [];

const checkWeather = async (city) => {
    
        const res = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        
        const data = await res.json();
        console.log(data);
        cities = data;
        if (data.name.includes("Province")) {
            data.name = data.name.replace("Province", "").trim();
        }

        document.querySelector(".city").textContent = `${data.name}, ${data.sys.country}`;
        document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".felt-temp").textContent = `Felt Temperature: ${Math.round(data.main.feels_like)}°C`;
        document.querySelector(".humidity").textContent = `%${data.main.humidity}`;
        document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;

        if (data.weather[0].main == "Clouds") {
            weatherImg.src = "./images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherImg.src = "./images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherImg.src = "./images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherImg.src = "./images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherImg.src = "./images/mist.png";
        }

        weatherDiv.style.display = "block";
};

searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value)
});

searchLocation.addEventListener("click", () => {
    if (cities.id) {
        window.open(`https://openweathermap.org/city/${cities.id}`, "_blank");
    }
});

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        searchBtn.click()
    }
})