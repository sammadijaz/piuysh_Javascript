const input = document.getElementById("input");
const btn = document.getElementById("btn");
const name = document.getElementById("name");

btn.addEventListener("click", () => {
    const inputValue = input.value;
    
    localStorage.setItem("name", inputValue);
    location.reload();
})

window.addEventListener("load", () => {
    const data = localStorage.getItem("name")
    name.innerText = data;        
})