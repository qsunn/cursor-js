const sound1 = document.querySelector('#sound1');
const sound2 = document.querySelector('#sound2');
const sound3 = document.querySelector('#sound3');
const sound4 = document.querySelector('#sound4');
const sound5 = document.querySelector('#sound5');
const sound6 = document.querySelector('#sound6');
const sound7 = document.querySelector('#sound7');
const sound8 = document.querySelector('#sound8');
const sound9 = document.querySelector('#sound9');

document.addEventListener('keypress', e => {
    switch (e.code) {
        case 'KeyQ':
            if (!sound1.paused) sound1.currentTime = 0;
            sound1.play();
            break;
        case 'KeyW':
            if (!sound2.paused) sound2.currentTime = 0;
            sound2.play();
            break;
        case 'KeyE':
            if (!sound3.paused) sound3.currentTime = 0;
            sound3.play();
            break;
        case 'KeyA':
            if (!sound4.paused) sound4.currentTime = 0;
            sound4.play();
            break;
        case 'KeyS':
            if (!sound5.paused) sound5.currentTime = 0;
            sound5.play();
            break;
        case 'KeyD':
            if (!sound6.paused) sound6.currentTime = 0;
            sound6.play();
            break;
        case 'KeyZ':
            if (!sound7.paused) sound7.currentTime = 0;
            sound7.play();
            break;
        case 'KeyX':
            if (!sound8.paused) sound8.currentTime = 0;
            sound8.play();
            break;
        case 'KeyC':
            if (!sound9.paused) sound9.currentTime = 0;
            sound9.play();
            break;
        default:
            return;
    }
});

document.querySelector('.container').addEventListener('click', e => {
    switch (e.target.innerText) {
        case 'Q':
            if (!sound1.paused) sound1.currentTime = 0;
            sound1.play();
            break;
        case 'W':
            if (!sound2.paused) sound2.currentTime = 0;
            sound2.play();
            break;
        case 'E':
            if (!sound3.paused) sound3.currentTime = 0;
            sound3.play();
            break;
        case 'A':
            if (!sound4.paused) sound4.currentTime = 0;
            sound4.play();
            break;
        case 'S':
            if (!sound5.paused) sound5.currentTime = 0;
            sound5.play();
            break;
        case 'D':
            if (!sound6.paused) sound6.currentTime = 0;
            sound6.play();
            break;
        case 'Z':
            if (!sound7.paused) sound7.currentTime = 0;
            sound7.play();
            break;
        case 'X':
            if (!sound8.paused) sound8.currentTime = 0;
            sound8.play();
            break;
        case 'C':
            if (!sound9.paused) sound9.currentTime = 0;
            sound9.play();
            break;
        default:
            return;
    }
});