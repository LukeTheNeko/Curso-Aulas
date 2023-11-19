document.addEventListener('DOMContentLoaded', () => {
    const snake = document.getElementById('snake');
    const food = document.getElementById('food');
    const gameContainer = document.querySelector('.game-container');
    
    let snakeX = 2;
    let snakeY = 2;
    let dx = 20;
    let dy = 0;
    let foodX = 0;
    let foodY = 0;
    const gridSize = 20;
    const gridSizeInPixels = 20;
    let snakeSegments = [];
    let growing = false;
    let gameSpeed = 100;
    
    function updateFoodPosition() {
        foodX = Math.floor(Math.random() * (gameContainer.offsetWidth / gridSize)) * gridSize;
        foodY = Math.floor(Math.random() * (gameContainer.offsetHeight / gridSize)) * gridSize;
        food.style.left = foodX + 'px';
        food.style.top = foodY + 'px';
    }
    
    function gameLoop() {
        snakeX += dx;
        snakeY += dy;
    
        if (snakeX < 0 || snakeX >= gameContainer.offsetWidth || snakeY < 0 || snakeY >= gameContainer.offsetHeight) {
            restartGame();
            return;
        }
    
        snakeSegments.unshift([snakeX, snakeY]);
    
        if (!growing) {
            snakeSegments.pop();
        } else {
            growing = false;
        }
    
        snake.style.left = snakeX + 'px';
        snake.style.top = snakeY + 'px';
    
        checkCollision();
    
        if (snakeX === foodX && snakeY === foodY) {
            growing = true;
            updateFoodPosition();
        }
    
        setTimeout(gameLoop, gameSpeed);
    }
    
    function checkCollision() {
        for (let i = 1; i < snakeSegments.length; i++) {
            if (snakeX === snakeSegments[i][0] && snakeY === snakeSegments[i][1]) {
                restartGame();
                return;
            }
        }
    }
    
    function restartGame() {
        alert('Game over! Score: ' + (snakeSegments.length - 1));
        snakeX = 2;
        snakeY = 2;
        snakeSegments = [];
        dx = 20;
        dy = 0;
        updateFoodPosition();
        setTimeout(gameLoop, gameSpeed);
    }
    
    updateFoodPosition();
    gameLoop();
    
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowUp':
                if (dy !== gridSizeInPixels) {
                    dx = 0;
                    dy = -gridSizeInPixels;
                }
                break;
            case 'ArrowDown':
                if (dy !== -gridSizeInPixels) {
                    dx = 0;
                    dy = gridSizeInPixels;
                }
                break;
            case 'ArrowLeft':
                if (dx !== gridSizeInPixels) {
                    dx = -gridSizeInPixels;
                    dy = 0;
                }
                break;
            case 'ArrowRight':
                if (dx !== -gridSizeInPixels) {
                    dx = gridSizeInPixels;
                    dy = 0;
                }
                break;
        }
    });
});