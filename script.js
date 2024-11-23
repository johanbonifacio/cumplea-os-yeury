// Logica del confeti
const confettiContainer = document.getElementById('confetti-container');
const confettiButton = document.getElementById('confettiButton');

confettiButton.addEventListener('click', () => {
  for (let i = 0; i < 150; i++) {
    createConfettiPiece();
  }
});

function createConfettiPiece() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti-piece');

  // Randomizar posición y animación
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.backgroundColor = getRandomColor();
  confetti.style.animationDuration = Math.random() * 2 + 2 + 's';

  confettiContainer.appendChild(confetti);

  // Remover el confeti
  setTimeout(() => confetti.remove(), 5000);
}

function getRandomColor() {
  const colors = ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Música de fondo
const music = document.getElementById('birthdayMusic');
const musicToggle = document.getElementById('musicToggle');

musicToggle.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicToggle.textContent = "🎶 Pausar Música";
  } else {
    music.pause();
    musicToggle.textContent = "▶️ Reproducir Música";
  }
});

// Mostrar mensaje personalizado
const showMessageButton = document.getElementById('showMessageButton');
const displayMessage = document.getElementById('displayMessage');