const mainDiv = document.querySelector('div');

const generateBlocks = () => {
    for (let i = 0; i < 25; i++) {
        const generateRandomColor = Math.floor(Math.random()*16777215).toString(16);
        const div = document.createElement('div');
        div.style.width = 50 + 'px';
        div.style.height = 50 + 'px';
        div.style.background = '#' + generateRandomColor;
        mainDiv.append(div);
    }
}

const generateIntervalBlocks = () => {
    setInterval(() => {
        mainDiv.innerHTML = '';
        generateBlocks();
    }, 1000);
}

generateIntervalBlocks();