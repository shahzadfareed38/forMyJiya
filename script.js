function showLove() {

    const surprise = document.getElementById("surprise");

    surprise.innerHTML =
        "I LOVE YOU ❤️🥺<br>Ab maan bhi jao meri jaan! 💕";

    // Extra hearts
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
}

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💕";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 30) + "px";

    heart.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    document
        .getElementById("hearts-container")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}


// Automatically create floating hearts
setInterval(createHeart, 700);