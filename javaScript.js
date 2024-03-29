const apiKey = "7ae6d2f94fb0dcaa873fa3c78202f6ab";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather_icon");

        async function checkWeather(city){
            const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
            var data = await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "clouds.png";
            }else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "clear.png";
            }else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "rain.png";
            }else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "drizzle.png";
            }else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "mist.png";
            }else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "snow.pnd";
            }
        }
        
        searchBtn.addEventListener("click",() => {
            checkWeather(searchBox.value);  
        });