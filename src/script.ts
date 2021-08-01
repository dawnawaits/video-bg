window.onload = () => {
    let loader = document.querySelector(".loader") as HTMLElement;
    loader.classList.add("no-show");

    let video = document.querySelector(".bg-video") as HTMLVideoElement;

    let playButton = document.querySelector("#play") as HTMLButtonElement;
    let pauseButton = document.querySelector("#pause") as HTMLButtonElement;

    playButton.addEventListener("click", () => {
        playButton.classList.add("no-show");
        pauseButton.classList.remove("no-show");
        video.play();
    });

    pauseButton.addEventListener("click", () => {
        pauseButton.classList.add("no-show");
        playButton.classList.remove("no-show");
        video.pause();
    });
};
