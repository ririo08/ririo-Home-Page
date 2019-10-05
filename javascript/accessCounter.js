const counterTarget = document.getElementById('accessCounterTarget');
var counterRandNum = Math.floor(Math.random() * 100000000)+1;
counterTarget.innerHTML = counterRandNum;