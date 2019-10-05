var urlArray = [];
urlArray = ['https://www.twitch.tv/ririo08/', 'https://www.youtube.com/channel/UC87SI6KnGObjTObcIsNISHA', 'https://twitter.com/ririo08'];
const targetURL = document.getElementById("randomurl");
var urlRandNum = Math.floor(Math.random() * 3);
targetURL.href = urlArray[urlRandNum];
console.log({ urlRandNum });
function changeURL() {
    urlRandNum = Math.floor(Math.random() * 3);
    console.log(urlRandNum)
    targetURL.href = urlArray[urlRandNum];
}
targetURL.addEventListener("click",changeURL);