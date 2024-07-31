
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
const navegarBtn = document.getElementById('navegar-btn');
const inicioLink = document.getElementById('inicio-link');

// Animación de texto
const tituloAnimado = document.getElementById('titulo-animado');
const texto = "Hola, soy Leandro";
let index = 0;

function escribirTexto() {
    if (index < texto.length) {
        tituloAnimado.innerHTML += texto.charAt(index);
        index++;
        setTimeout(escribirTexto, 100);
    }
}

escribirTexto();

// Mostrar/ocultar menú en dispositivos móviles
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        header.classList.remove('hidden');
    } else {
        header.classList.add('hidden');
    }
});

// Mostrar navegación al hacer clic en "Navegar"
navegarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.remove('hidden');
});

// Ocultar navegación al hacer clic en "Inicio"
inicioLink.addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.add('hidden');
    window.scrollTo(0, 0);
});

// Animación de partículas
const particulasContainer = document.getElementById('particulas');
const numParticulas = 50;

for (let i = 0; i < numParticulas; i++) {
    crearParticula();
}

function crearParticula() {
    const particula = document.createElement('div');
    particula.classList.add('particula');
    
    const tamaño = Math.random() * 5 + 2;
    particula.style.width = `${tamaño}px`;
    particula.style.height = `${tamaño}px`;
    
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    particula.style.left = `${posX}%`;
    particula.style.top = `${posY}%`;
    
    const duracion = Math.random() * 20 + 10;
    particula.style.animation = `flotar ${duracion}s infinite alternate`;
    
    particulasContainer.appendChild(particula);
}

// Animación de flotación para las partículas
const estiloAnimacion = document.createElement('style');
estiloAnimacion.innerHTML = `
    @keyframes flotar {
        0% { transform: translate(0, 0); }
        100% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px); }
    }
`;
document.head.appendChild(estiloAnimacion);