const grayScreen = document.getElementById("grayscreen");
const iframeBox = document.getElementById('iframeContainer');
const bodyTarget = document.getElementById("body");

let addiframe = function(){
    grayScreen.classList.add('grayscreen-active');
    iframeBox.classList.add('movielist-iframeContainer_active');
};

let removeiframe = function () {
    grayScreen.classList.remove('grayscreen-active');
    iframeBox.classList.remove('movielist-iframeContainer_active');
};

grayScreen.addEventListener('click', function(){
    removeiframe();
});

document.querySelectorAll(".Detailink").forEach(function (foo) {
    foo.addEventListener('click', function(){
        addiframe();
    });
});

// タイトルカウント

var jump = function () {
    location.hash = "";
    location.hash = "body";
}

document.querySelectorAll("dd").forEach(function (foo) {
    foo.addEventListener('click', jump);
});