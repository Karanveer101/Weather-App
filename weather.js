const searchBtn = document.querySelector(".material-icons");

searchBtn.addEventListener("click", (e) => {
  const input = document.getElementById("searchBar");
  const cityName = input.value;
  if (cityName === "" || cityName === null) return;
  else {
    e.preventDefault();
    input.value = "";
  }

  const api_Key = "859bd6189eff926de500219b9ed54605";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_Key}&units=metric`
  )
    .then((response) => response.json())

    .then((data) => {
      const { country } = data.sys;
      const { speed } = data.wind;
      const { name } = data;
      const { main } = data.weather[0];
      const { feels_like } = data.main;
      const { temp } = data.main;
      const { humidity } = data.main;
      const { icon } = data.weather[0];
      console.log(data);

      document.querySelector(".cityName").innerText = `${name}, ${country}`;
      document.querySelector(".temp").innerText = `${temp}° C`;
      document.querySelector(
        ".icon"
      ).src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      document.querySelector(".weather").innerText = main;
      document.querySelector(".feelsLike").innerText = `Feels like: ${feels_like}° C`;
      document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
      document.querySelector(".wind").innerText = `Wind speed: ${speed}m/s`;

      const body = document.querySelector("body");
      if (
        icon === "01n" ||
        icon === "02n" ||
        icon === "03n" ||
        icon === "04n" ||
        icon === "09n" ||
        icon === "10n" ||
        icon === "11n" ||
        icon === "13n" ||
        icon === "50n"
      ) {
        body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1472552944129-b035e9ea3744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')";
      } else {
        body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80')";
      }
    })
    .catch((error) => {
      alert("no results found! please type a valid city name");
    });
});
