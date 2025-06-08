const btn = document.getElementById("btn");
const country = document.getElementById("country");
const temp = document.getElementById("temp")
const feel = document.getElementById("feel")

async function getData (lat, long){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=2f1a82217b9f41358c0165922250506&q=${lat},${long}&aqi=yes`)

    return await promise.json();
}

 async function sucessfullyRecievedLocation (location){
    const result = await getData(location.coords.latitude, location.coords.longitude)

    country.innerText = `Location: ${result.location.name}, ${ result.location.region}, ${ result.location.country}`
    temp.innerText = `Temps: ${result.current.temp_c}°C ||| ${ result.current.temp_f}°F`
    feel.innerText = `Feels Like: ${result.current.feelslike_c}°C ||| ${ result.current.feelslike_f}°F`
    


    console.log(result)
}

function unSucessfullyRecievedLocation (){
    console.log("Failed to retrieve location")
}


btn.addEventListener("click", async () => {
    const result = await navigator.geolocation.getCurrentPosition(sucessfullyRecievedLocation, unSucessfullyRecievedLocation)

})


country
: 
"Pakistan"
lat
: 
32.933
localtime
: 
"2025-06-09 00:04"
localtime_epoch
: 
1749409484
lon
: 
73.733
name
: 
"Jhelum"
region
: 
"Punjab"
tz_id
: 
"Asia/Karachi"
