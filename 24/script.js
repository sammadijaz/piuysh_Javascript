function add(a){
    return function (b){
        return function(c){
            return a + b + c;
        }
    }
}

// This function wont run untill all the arguement are sent to their respective parameters


console.log(add(5)(5)(10)) // 20

/* CODE BY AI

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

// Wrap setTimeout in a Promise
const expPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(5); // Resolving after 5 seconds
    }, 5000);
});

// Use async/await to ensure execution waits for `exp`
async function calculate() {
    const exp = await expPromise; // Wait for `exp` to be ready
    console.log(add(5)(exp)(10)); // Now it correctly evaluates to 20
}

calculate(); // Call the function

*/

