function updateSize() {
    const width = window.innerWidth;  
    const height = window.innerHeight; 
    const sizeDisplay = document.getElementById('sizeDisplay');
    
    sizeDisplay.textContent = `Width: ${width} and Height: ${height}`;
}

updateSize();

window.addEventListener('resize', updateSize);