
let gameCanvas, screen;
const FPS = 10;
// const tilesCount = 20;
// let playerPosX = 10, playerPosY = 10;
// let applePosX = 15, applePosY = 15;

window.onload = function () {
    // get canvas object from DOM
    gameCanvas = document.getElementById('gameCanvas');
    // get canvas context (so we can use it for painting elements inside)
    screen = gameCanvas.getContext('2d');

    // run the game loop
    setInterval(() => {
        gameLoop();
    }, 1000 / FPS);
}

function gameLoop() {
    // game screen background
    screen.fillStyle = '#000';
    screen.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

    // showing snake
    // screen.fillStyle = 'yellow';
    // screen.fillRect(playerPosX * tilesCount, playerPosY * tilesCount ,tilesCount - 2, tilesCount - 2);


    // showing apple
    // screen.fillStyle = "red";
    // screen.fillRect(applePosX * tilesCount, applePosY * tilesCount, tilesCount - 2, tilesCount - 2);
}