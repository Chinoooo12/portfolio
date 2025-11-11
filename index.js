import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import {
        getFirestore,
        collection,
        addDoc,
        doc,
        setDoc,
        getDoc,
        query,
        where,
        getDocs
      } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

//import { datos, getDatos } from "./elementos.js";

import { getDatos } from "./elementos.js";

   const firebaseConfig = {
    apiKey: "AIzaSyDThadktQu2xXPpeKEzVVnD4Rk17fyPCwg",
    authDomain: "hola-e582a.firebaseapp.com",
    projectId: "hola-e582a",
    storageBucket: "hola-e582a.firebasestorage.app",
    messagingSenderId: "407566920375",
    appId: "1:407566920375:web:89047e83af44e6fb11bb32",
    measurementId: "G-QMJXDJDNQ7"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

// esperar al DOM para leer elementos y enganchar handlers
document.addEventListener('DOMContentLoaded', () => {
    const datos = getDatos();

    // ejemplo: guardar contacto — usar setDoc con ID derivado del email
    if (datos.enviar) {
        datos.enviar.addEventListener("click", async function (event) {
            event.preventDefault();
            if (!datos.modalNombre || !datos.modalEmail) return;

            datos.enviar.classList.add('flash-success');
            try {
                // crear un id seguro a partir del email (sanitizar)
                const rawEmail = (datos.modalEmail.value || '').toLowerCase().trim();
                if (!rawEmail) throw new Error("Falta el email para generar el ID");
                const userId = encodeURIComponent(rawEmail); // p.ej. "user%40example.com"

                // usar setDoc para crear/actualizar el documento con ID personalizado
                await setDoc(doc(db, "contactos", userId), {
                    nombre: datos.modalNombre.value || '',
                    apellido: datos.modalApellido?.value || '',
                    email: rawEmail,
                    telefono: datos.modalTelefono?.value || '',
                    ciudad: datos.modalCiudad?.value || '',
                    updatedAt: new Date().toISOString()
                });

                console.log("Contacto guardado con id:", userId);
                setTimeout(() => {
                    const modal = document.getElementById('contactModal');
                    if (modal) modal.style.display = 'none';
                    datos.enviar.classList.remove('flash-success');
                }, 1200);
            } catch (e) {
                console.error("Error writing document: ", e);
                datos.enviar.classList.remove('flash-success');
            }
        });
    }

    // ejemplo: crear usuario usando email como id (sanitizado)
    if (datos.btn) {
        datos.btn.addEventListener("click", async function () {
            if (!datos.nombre || !datos.apellido) return;
            try {
                const email = (datos.nombre.value || '').toLowerCase(); // reemplaza por campo email si lo tienes
                const userId = encodeURIComponent(email || `user-${Date.now()}`);
                await setDoc(doc(db, "users", userId), {
                    first: datos.nombre.value,
                    last: datos.apellido.value,
                    born: datos.fecha.value
                });
                console.log("Usuario guardado con id:", userId);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        });
    }

    // resto de handlers...
});
