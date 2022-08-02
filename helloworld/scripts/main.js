const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
let num1 = 5;
let num2 = 3;
const myp = document.querySelector('p');
myp.textContent = num1 + ' multiplies to ' + num2 + ' equals ' + multiply(num1,num2) + '.';

document.querySelector('h1').addEventListener('cliak', function() {
    alert('Ouch! Stop poking me!');
});

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
