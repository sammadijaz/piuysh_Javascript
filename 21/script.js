const btn = document.getElementById("btn");
const name = document.getElementById("name");

 async function sucessfullyRecievedLocation (location){
    await console.log(location)
    name.innerText = location;

}

function unSucessfullyRecievedLocation (){
    console.log("Failed to retrieve location")
}


btn.addEventListener("click", async () => {
    const result = await navigator.geolocation.getCurrentPosition(() => sucessfullyRecievedLocation() , () => unSucessfullyRecievedLocation())

    name.innerText = result;
})


async function getData (inputDetails){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=2f1a82217b9f41358c0165922250506&q=${inputDetails}&aqi=yes`)

    return await promise.json();
}