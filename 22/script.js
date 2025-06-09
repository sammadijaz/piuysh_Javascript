function currentTime (){
    const time = new Date();
    const formattedTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`

    document.getElementById("input-time").innerText = formattedTime;

    
} 

const interval = setInterval(currentTime, 1000);

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    clearInterval(interval)
})