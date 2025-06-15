const btn = document.getElementById("btn");
const demo = document.getElementById("demo");
const input = document.getElementById("input");



function main (a){
    // console.log(a)

    function add (b){
        console.log(a + b);
    }

    return add;
}

let addTo5 = main(5);

addTo5(20); // 25

let addTo100 = main(100);

addTo100(5) // 105




function fontSizer (size){
    return () => {
        demo.style.fontSize = `${size}px`;
    }
}

const inputValue = (input.value);
const customSize = fontSizer(inputValue)

btn.addEventListener("click", customSize)

// I couldnt figure it out something so I left it here
