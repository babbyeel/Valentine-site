document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");
    let noClickCount = 0;

    function moveButton() {
        if (noClickCount < 2) {
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 50);
            noButton.style.position = "absolute";
            noButton.style.left = `${x}px`;
            noButton.style.top = `${y}px`;
        } else if (noClickCount === 2) {
            noButton.innerText = "Do you not love me??? 😭";
        } else if (noClickCount === 3) {
            noButton.innerText = "Wait really? 🥺";
        } else if (noClickCount === 6) {
            document.body.innerHTML = `
                <div id="sadScreen" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: black; display: flex; flex-direction: column; justify-content: center; align-items: center; color: white; font-size: 2rem; text-align: center;">
                    <p>You hurt me. You broke my heart. 💔</p>
                    <button id="restartBtn" style="margin-top: 20px; padding: 10px 20px; font-size: 1.5rem; cursor: pointer;">Restart</button>
                </div>
            `;
            startCryingEffect();
            document.getElementById("restartBtn").addEventListener("click", () => location.reload());
        }
        noClickCount++;
    }

    noButton.addEventListener("mouseover", moveButton);
    noButton.addEventListener("click", moveButton);

    function fireRosePetals() {
        confetti({
            particleCount: 3,
            spread: 120,
            startVelocity: 10,
            origin: { x: Math.random(), y: 0 },
            shapes: ["circle"],
            colors: ["#FF0000", "#D70040"],
            scalar: 1.5,
            drift: 0.2,
            ticks: 250,
        });
        setTimeout(fireRosePetals, 500);
    }

    yesButton.addEventListener("click", function () {
        document.body.innerHTML = "<h1 style='text-align: center; font-size: 3rem;'>Yay! I knew you'd say yes! ❤️</h1>";
        fireRosePetals();
    });

    function startCryingEffect() {
        setInterval(() => {
            let emoji = document.createElement("div");
            emoji.innerText = "😭";
            emoji.style.position = "fixed";
            emoji.style.left = Math.random() * window.innerWidth + "px";
            emoji.style.top = "-50px";
            emoji.style.fontSize = "2rem";
            emoji.style.opacity = Math.random();
            emoji.style.animation = "fall 3s linear infinite";
            document.body.appendChild(emoji);

            setTimeout(() => emoji.remove(), 3000);
        }, 200);
    }
}
);
