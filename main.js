
let gameCanvas, screen;
const FPS = 10;
const tilesCount = 20;
let playerPosX = 10, playerPosY = 10;
let applePosX = 15, applePosY = 15;
// let xVelocity = 0, yVelocity = 0;

window.onload = function () {
    // get canvas object from DOM
    gameCanvas = document.getElementById('gameCanvas');
    // get canvas context (so we can use it for painting elements inside)
    screen = gameCanvas.getContext('2d');

    // add keyboard event listener
    document.addEventListener('keyup', onKeyUp);
    
    // run the game loop
    setInterval(() => {
        gameLoop();
    }, 1000 / FPS);
}

function gameLoop() {

    // playerPosX += xVelocity;
    // playerPosY += yVelocity;

    // game screen background
    screen.fillStyle = '#000';
    screen.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

    // showing snake
    screen.fillStyle = 'yellow';
    screen.fillRect(playerPosX * tilesCount, playerPosY * tilesCount ,tilesCount - 2, tilesCount - 2);


    // showing apple
    screen.fillStyle = "red";
    screen.fillRect(applePosX * tilesCount, applePosY * tilesCount, tilesCount - 2, tilesCount - 2);
}

function onKeyUp(event) {
    // switch(event.keyCode) {
    //     case 37:    // left
    //         xVelocity = -1;      // go left
    //         yVelocity = 0;      // no Y axis movement
    //         break;
    //     case 38:    // up
    //         yVelocity = -1;     // go up
    //         xVelocity = 0;      // no X axis movement
    //         break;
    //     case 39:    // right
    //         xVelocity = 1;      // go right
    //         yVelocity = 0;      // no Y axis movement
    //         break;
    //     case 40:    // down
    //         yVelocity = 1;      // go down
    //         xVelocity = 0;      // no X axis movement
    //         break;
    // }
}