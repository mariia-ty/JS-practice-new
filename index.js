//task 1
/* function checkEven(number) {
    if (number % 2 === 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}
checkEven(7);
*/

//task 2
/*
function maxNum(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    console.log(max);
}

let arr = [1, 8, 9, 3, 14, 17, 30, 23];
maxNum(arr);
*/

//task 3
/*
const arr = [1, -2, 3, 4, -5, 9];
function positive(arr) {
    return(arr.filter(num => num > 0))    
}
console.log(positive(arr));
*/

//task 4
/*
function sum(arr) {
    return(arr.reduce((total, num) => total+ num, 0))
}
const arr = [1, -2, 3, 4, -5, 9];
console.log(sum(arr));
*/

//task 5
/*
function backwards(arr) {
    return(arr.reverse())
}
let arr = [1, 8, 9, 3, 14, 17, 30, 23];
console.log(backwards(arr));
*/

//task 6
/*
function removeDub(arr) {
    return[...new Set(arr)]
}
let arr = [1, 1, 3, 4, 4, 5, 5, 5, 6, 7];
console.log(removeDub(arr));
*/

//task 7
/*
const change = document.getElementById('change');
change.addEventListener('click', () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});
*/

//tak 8
const change = document.getElementById("change");
const amount = document.getElementById("amount");
let num = 0; 
change.addEventListener("click", () => {
    num += 1;  
    amount.textContent = num;
})
