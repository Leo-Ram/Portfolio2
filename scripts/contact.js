
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js';
import { getDatabase, ref, set, push } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js';


const firebaseConfig = {
    apiKey: "AIzaSyBBer0H12vNeC-Ku7bRBVPLIbfp7DByzyQ",
    authDomain: "mensajes-a3d67.firebaseapp.com",
    projectId: "mensajes-a3d67",
    storageBucket: "mensajes-a3d67.appspot.com",
    messagingSenderId: "599863518639",
    appId: "1:599863518639:web:f313f5244a0cfaec76bb5a",
    measurementId: "G-XNSLMLP0RR"
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