const buttons = document.getElementsByClassName("fa-play");
console.log(buttons);

let sound0 = new Howl({
    src: "../songs/song1.mp3"
});

let sound1 = new Howl({
    src: "../songs/song2.mp3"
});

let sound2 = new Howl({
    src: "../songs/song3.mp3"
});

let sound3 = new Howl({
    src: "../songs/song4.mp3"
});

buttons[0].addEventListener("click", function() {
    sound0.playing() ? sound0.pause() : sound0.play();
    sound1.pause();
    sound2.pause();
    sound3.pause();
});

buttons[1].addEventListener("click", function() {
    sound1.playing() ? sound1.pause() : sound1.play();
    sound0.pause();
    sound2.pause();
    sound3.pause();
});

buttons[2].addEventListener("click", function() {
    sound2.playing() ? sound2.pause() : sound2.play();
    sound0.pause();
    sound1.pause();
    sound3.pause();
});

buttons[3].addEventListener("click", function() {
    sound3.playing() ? sound3.pause() : sound3.play();
    sound0.pause();
    sound2.pause();
    sound1.pause();
});
