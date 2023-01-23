let decrement = document.getElementById('decrease');
let increment = document.getElementById('increase');
let reset = document.getElementById('reset');

let count = 0;

decrement.addEventListener('click', () => {
    count--;
    document.getElementById('number').innerHTML = count;
})

increment.addEventListener('click' , () => {
    count++;
    document.getElementById('number').innerHTML = count;
})

reset.addEventListener('click' , () => {
    count = 0;
    document.getElementById('number').innerHTML = count;
})