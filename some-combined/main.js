// ######### Functions in Javascript #########

greetUser = (userName) => {
    alert(`Welcome ${userName}!`)
}

// greetUser(userName = prompt("Enter your name: "))


function multiplyNums(one, two){
    alert(one * two);
}

// multiplyNums(prompt("Enter number one: "), prompt("Enter number two: "))


function addAll() {
    let ans = 0;

    for(let i = 0; i < arguments.length; i = i + 1){
        ans = ans + arguments[i]
    }

    return ans;
}

let answer = addAll(1, 2, 3, 10)
// console.log(answer) // 16



// ######### High Order Functions and Callbacks in Javascript #########


function addNums (num1, num2, callBack){
    let result = num1 + num2;
    callBack(result);
}

// addNums(10, 20, val => console.log(val))


// ######### Arrays in Javascript #########

const arr = ["Sam", "Man"];

arr.push("Hello", "Two")
// arr.pop()
// console.log(arr)


// ######### Arrays High Order Functions in Javascript #########

const arr1 = [1,2,3,4,5];

function doubleNum (num) {
    return num * 2;
}

let doubledArr = arr1.map(doubleNum);
// console.log(doubledArr)


// ######### Query Selector in Javascript - DOM Manipulation Tutorial #########

document.querySelector("code").innerHTML = "No Hello World"


const body = document.querySelectorAll("body")

// body.forEach((e)=>console.log(e))
