// Inicializamos la posición en el cuadrante (en la celda 0)
let currentPosition = 0;
const gridSize = 3; // Tamaño del cuadrante 3x3
const image = document.getElementById('image');

// Función para actualizar la posición de la imagen en el cuadrante
function updatePosition() {
  // Limpiamos la celda actual
  document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '');
  // Colocamos la imagen en la nueva celda
  document.getElementById(`cell-${currentPosition}`).appendChild(image);
}

// Función para mover hacia arriba
function moveUp() {
  if (currentPosition >= gridSize) {
    currentPosition -= gridSize;
    updatePosition();
  }
}

// Función para mover hacia abajo
function moveDown() {
  if (currentPosition < (gridSize * (gridSize - 1))) {
    currentPosition += gridSize;
    updatePosition();
  }
}

// Función para mover hacia la izquierda
function moveLeft() {
  if (currentPosition % gridSize !== 0) {
    currentPosition -= 1;
    updatePosition();
  }
}

// Función para mover hacia la derecha
function moveRight() {
  if ((currentPosition + 1) % gridSize !== 0) {
    currentPosition += 1;
    updatePosition();
  }
}

// Inicializamos la posición de la imagen
updatePosition();