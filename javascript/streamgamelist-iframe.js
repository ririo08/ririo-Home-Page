var jump = function(){
    location.hash = "";
    location.hash = "iframe";
}

document.querySelectorAll("dd").forEach(function(foo){
    foo.addEventListener('click', jump);
});

