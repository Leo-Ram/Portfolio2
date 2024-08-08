
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js';
import { getDatabase, ref, set, push } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js';


const firebaseConfig = {
    apiKey: "AIzaSyD2nzSkBcM_uwGpNS-mTHslFvA26gnFqO8",
    authDomain: "portfolio-5ad29.firebaseapp.com",
    databaseURL: "https://portfolio-5ad29-default-rtdb.firebaseio.com",
    projectId: "portfolio-5ad29",
    storageBucket: "portfolio-5ad29.appspot.com",
    messagingSenderId: "198508497078",
    appId: "1:198508497078:web:9137febdcbbcc8d63ebe17",
    measurementId: "G-683BEMVQK4"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app); 

// Función para manejar el envío del formulario
function handleSubmit(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crear un nuevo registro en Firebase
    set(push(ref(database,"mensajes")),{
        nombre: nombre,
        email: email,
        mensaje: mensaje,
        fecha: new Date().toString()
    })
    .then(() => {
        alert('Mensaje enviado con éxito');
        document.getElementById('contacto-form').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
    });
}

// Agregar el event listener al formulario
document.getElementById('contacto-form').addEventListener('submit', handleSubmit);