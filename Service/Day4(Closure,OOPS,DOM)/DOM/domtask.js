const mainDiv = document.getElementById('mainDiv');
console.log(mainDiv);

const paraElements = document.getElementsByClassName('para');
console.log(paraElements[0]);
console.log(paraElements[1]);

//Select all and change it to color red.
const paraElements1 = document.querySelectorAll('.para');
paraElements1.forEach(function(para) {
    para.style.color = 'red';
});