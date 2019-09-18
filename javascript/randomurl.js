var urlArray = [];
urlArray = ['https://www.twitch.tv/ririo08/', 'https://www.youtube.com/channel/UC87SI6KnGObjTObcIsNISHA', 'https://twitter.com/ririo08'];
const target = document.getElementById("randomurl");
var randNum = Math.floor(Math.random() * 3);
target.href = urlArray[randNum];
console.log({ randNum });
