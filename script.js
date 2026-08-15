const button = document.getElementById("wishButton");
const message = document.getElementById("message");
const heartsContainer = document.getElementById("hearts");

button.addEventListener("click", function () {

    // Show message
    message.classList.remove("hidden");

    // Change button text
    button.textContent = "❤️ Wish Opened ❤️";

    // Disable button
    button.disabled = true;

    // Create floating hearts
    createHearts();
});


function createHearts() {

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.classList.add("floating-heart");

        heart.textContent = "❤️";

        // Random horizontal position
        heart.style.left = Math.random() * 100 + "vw";

        // Random size
        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        // Random animation duration
        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        // Random delay
        heart.style.animationDelay =
            Math.random() * 2 + "s";

        heartsContainer.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
}