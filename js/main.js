'use strict'

var toggler = document.getElementById("toggler-nav");
var features = document.getElementById("features-nav");
var nav = document.getElementById("main-nav");

features.addEventListener("click", function(){
    nav.classList.remove("show");
});
