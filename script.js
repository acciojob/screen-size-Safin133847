let angle = 0;

function rotateLine() {
    const line = document.getElementById('line');
    angle += 2;
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Apply translation and rotation
}
setInterval(rotateLine, 20);
