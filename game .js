const player = document.getElementById("player");

let isJumping = false;
let velocityY = 0;
let gravity = 0.5;
let jumpStrength = 12;
let positionY = 50;
let positionX = 50;

let keys = {
    left: false,
    right: false
};

function gameLoop() {
    // Gravity & jumping
    if (isJumping) {
        velocityY -= gravity;
        positionY += velocityY;

        if (positionY <= 50) {
            positionY = 50;
            isJumping = false;
            velocityY = 0;
        }
    }

    // Left & right movement
    if (keys.left) {
        positionX -= 5;
    }
    if (keys.right) {
        positionX += 5;
    }

    // Apply updated positions
    player.style.bottom = positionY + "px";
    player.style.left = positionX + "px";

    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", function(e) {
    if (e.code === "Space" && !isJumping) {
        isJumping = true;
        velocityY = jumpStrength;
    } else if (e.code === "ArrowLeft") {
        keys.left = true;
    } else if (e.code === "ArrowRight") {
        keys.right = true;
    }
});

document.addEventListener("keyup", function(e) {
    if (e.code === "ArrowLeft") {
        keys.left = false;
    } else if (e.code === "ArrowRight") {
        keys.right = false;
    }
});

requestAnimationFrame(gameLoop);
