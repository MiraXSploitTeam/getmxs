document.addEventListener('DOMContentLoaded', function() {
    // Key system functionality
    const keyButton = document.getElementById('generateKey');
    const keyDisplay = document.getElementById('keyDisplay');

    keyButton.addEventListener('click', function() {
        const key = generateRandomKey();
        keyDisplay.textContent = `Your Key: ${key}`;
    });

    function generateRandomKey() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 16; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Glow Ball Effect
    const glowBall = document.createElement('div');
    glowBall.classList.add('glow-ball');
    document.body.appendChild(glowBall);

    document.addEventListener('mousemove', (e) => {
        glowBall.style.left = `${e.pageX}px`;
        glowBall.style.top = `${e.pageY}px`;
    });
});
