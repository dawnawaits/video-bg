"use strict";
window.onload = function () {
    var loader = document.querySelector(".loader");
    loader.classList.add("no-show");
    var video = document.querySelector(".bg-video");
    var playButton = document.querySelector("#play");
    var pauseButton = document.querySelector("#pause");
    playButton.addEventListener("click", function () {
        playButton.classList.add("no-show");
        pauseButton.classList.remove("no-show");
        video.play();
    });
    pauseButton.addEventListener("click", function () {
        pauseButton.classList.add("no-show");
        playButton.classList.remove("no-show");
        video.pause();
    });
};
