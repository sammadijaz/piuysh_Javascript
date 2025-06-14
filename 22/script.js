function currentTime (){

    // LEARNING
    // const time = new Date();
    // const formattedTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    // document.getElementById("input-time").innerText = formattedTime;


    // GOT FROM THE WEB
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: "numeric", hour12: true });
    // console.log(timeString); // Output: e.g., "11:47 PM"
    document.getElementById("input-time").innerText = timeString;

    

}  
setInterval(currentTime, 1000)


////// ASSIGNMENT ////////

const btn2 = document.getElementById("btn2")

let i = 1;

btn2.addEventListener("click", () => {

    let userInput = prompt("For how many seconds should the timer last?")
    
    let timer = setInterval(() => {
        document.getElementById("input-timer").innerText = `Timer: ${i}`;
        i++;

        if (i > userInput){
        clearInterval(timer)
        console.log("timer stopped!")
    }

    }, 1000);
    
})

const btn3 = document.getElementById("btn3");

btn3.addEventListener("click",() => {
    window.location.reload()
})










