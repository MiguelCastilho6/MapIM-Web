document.addEventListener('DOMContentLoaded', () => {
    const draggable = document.getElementById('draggable');
    let isDragging = false;
    let startX, startY, initialMouseX, initialMouseY;
    let scale = 1;

    draggable.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = draggable.offsetLeft;
        startY = draggable.offsetTop;
        initialMouseX = e.clientX;
        initialMouseY = e.clientY;
        draggable.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const dx = e.clientX - initialMouseX;
            const dy = e.clientY - initialMouseY;
            draggable.style.left = `${startX + dx}px`;
            draggable.style.top = `${startY + dy}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        draggable.style.cursor = 'grab';
    });

    document.addEventListener('wheel', (e) => {
        e.preventDefault();
        const zoomIntensity = 0.005;
        scale += e.deltaY * -zoomIntensity;
        scale = Math.min(Math.max(1.5, scale), 20);
        draggable.style.transform = `scale(${scale})`;
    });
});
function applyTransform() {
    draggable.style.transform = `translate(${currentTransform.x}px, ${currentTransform.y}px) scale(${currentTransform.scale})`;
}



document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchValue = document.getElementById('sala1').value;
    window.location.href = 'path.html?search=${sala1}';
  });


// Fetch the SVG based on URL parameters
const urlParams = new URLSearchParams(window.location.search);
const sala = urlParams.get('sala') ?? '101-A';
const andar = urlParams.get('andar') ?? 1;

fetch('img/' + andar + '-andar.svg')
    .then((response) => response.text())
    .then((data) => {
        const parser = new DOMParser();
        const svgContainer = document.getElementById('svg-container');
        const svg = parser.parseFromString(data, "image/svg+xml").querySelector('svg');
        document.getElementById(andarId).appendChild(svg);

        const salaElement = document.getElementById(sala);

        if (!salaElement) {
            alert('Não existe');
            return;
        }

        salaElement.style.fill = 'green';
    });


   
    