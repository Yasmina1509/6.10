const KEY = "1b70d5a3d8f7548af6551bc567d1ab55";

const getData = async (city) => {
    const base = "https://api.openweathermap.org/data/2.5/weather";
    const query = `?q=${city}&units=metric&appid=${KEY}`;
    const API = base + query;
    const request = await fetch(API);
    const data = await request.json();

    return data;
};

let form = document.getElementById("form");
let info = document.createElement("div");
let contents = document.getElementById("contents");

const getWeather = async (city) => {
    const data = await getData(city);
    console.log(data);
    info.classList.add("info");



    console.log(data.main.temp);

    if (city == data.name) {
        info.innerHTML = `<h4>${city}</h4>` +

        `<img src=${data.main.temp > 15 ?'./quyosh.jpg': './coluld.jpg'   } />`

         + `<p class="state">${data.weather[0].main}</p>
            <p>TEMP <span>${data.main.temp}</span> °C</p>

  `;
    } else {
        info.innerHTML = `
        <h4>Shahar nomini to'g'ri yozing!</h4>
    `;
    }


    contents.appendChild(info);
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityName = form.city.value.trim();

    form.reset();
    getWeather(cityName);
    info.innerHTML = "";
});

