const input = document.getElementById("input");
const btn = document.getElementById("search-btn")

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

// http://api.weatherapi.com/v1/current.json?key=2f1a82217b9f41358c0165922250506&q=London&aqi=yes

async function getData (inputDetails){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=2f1a82217b9f41358c0165922250506&q=${inputDetails}&aqi=yes`)

    return await promise.json();
}

btn.addEventListener("click", async () => {
    const inputValue = input.value
    const result = await getData(inputValue);
    console.log(result)
    
    cityName.innerText = `Location: ${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTime.innerText = `Date & Time: ${result.location.localtime}`;
    cityTemp.innerText = `Temps: ${result.current.temp_c}°C  ||  ${result.current.temp_f}°F`;
})