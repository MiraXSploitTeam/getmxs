const glowingBall = document.getElementById('glowingBall');

document.addEventListener('mousemove', (e) => {
    const x = e.pageX;
    const y = e.pageY;
    glowingBall.style.transform = `translate(${x}px, ${y}px)`;
});
