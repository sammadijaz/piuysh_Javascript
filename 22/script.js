function currentTime (){
    const time = new Date();
    const formattedTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`

    // const now = new Date();
    // const timeString = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: "numeric", hour12: true });
    // // console.log(timeString); // Output: e.g., "11:47 PM"

    
    document.getElementById("input-time").innerText = formattedTime;

} 


const input = prompt("Timer in Seconds: ");


function display (){
    document.getElementById("input-time").innerText = interval + 1
    console.log(interval +1)
}

const interval = setInterval(display, input * 1000);



const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    clearInterval(interval)
})