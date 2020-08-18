const grayScreen = document.getElementById("grayscreen");
const iframeBox = document.getElementById('iframeContainer');

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
})

document.querySelectorAll(".Detailink").forEach(function (bar) {
    bar.addEventListener('click', function(){
        addiframe();
    });
});

