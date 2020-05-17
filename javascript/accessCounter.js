const counterTarget = document.getElementById('accessCounterTarget');
console.log("target is " + counterTarget);
var counterRandNum = Math.floor(Math.random() * 100000000)+1;
console.log(counterRandNum);
counterTarget.innerHTML = counterRandNum;