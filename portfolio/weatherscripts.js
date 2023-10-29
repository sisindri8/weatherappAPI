let result = document.getElementById("result");
let searchBtn = document.getElementById("searchbtn");
let cityref = document.getElementById("city");
let getweather = () =>{
    let cityvalue = cityref.value;
    if(cityvalue.length == 0){
        result.innerHTML = `<h3>Please enter a city name </h3>`;
    }
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${key}&units=metric`;
        cityref.value ="";
        fetch(url).then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            result.innerHTML = `<h2>${data.name}</h2>
            <h4  class="weather">${data.weather[0].main}</h4>
            <h4 class="weather">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1 class="temp">${data.main.temp}&#176;</h1>
            <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}</h4>
            </div>
            `;
        })
        .catch(() =>{
            result.innerHTML = `<h3>City not found</h3> `;
        });
    }
};
searchBtn.addEventListener("click",getweather);
window.addEventListener("load",getweather);
