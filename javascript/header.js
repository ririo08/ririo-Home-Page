// fetch('https://ririo08.github.io/ririo-Home-Page/header.html')
fetch('http://127.0.0.1:5500/header.html')
    .then(response => response.text())
    .then(function (body) {
        document.querySelector('#header').innerHTML = body;
        
        // show_header.js 
        let yoffset = window.pageYOffset;
        let yoffsetdata = [234,172,187]
        if (yoffsetdata.includes(yoffset)) {
            scrollTo(0, 0);
        }

        // accessCounter.js
        const counterTarget = document.getElementById('accessCounterTarget');
        var counterRandNum = Math.floor(Math.random() * 100000000) + 1;
        counterTarget.innerHTML = counterRandNum;

        // randomURL.js
        var urlArray = [];
        urlArray = ['https://www.twitch.tv/ririo08/', 'https://www.youtube.com/channel/UC87SI6KnGObjTObcIsNISHA', 'https://twitter.com/ririo08'];
        const targetURL = document.getElementById("randomurl");
        var urlRandNum = Math.floor(Math.random() * 3);
        targetURL.href = urlArray[urlRandNum];
        function changeURL() {
            urlRandNum = Math.floor(Math.random() * 3);
            console.log(urlRandNum)
            targetURL.href = urlArray[urlRandNum];
        }
        targetURL.addEventListener("click", changeURL);
        console.log("fetch header done");
    });