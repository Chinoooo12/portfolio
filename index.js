
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

import { datos } from "./elementos.js";

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

if (datos.enviar) {
    datos.enviar.addEventListener("click", async function (event) {
        event.preventDefault();
        datos.enviar.classList.add('flash-success');
        try {
            const docRef = await addDoc(collection(db, "contactos"), {
                nombre: datos.modalNombre.value,
                apellido: datos.modalApellido.value,
                email: datos.modalEmail.value,
                telefono: datos.modalTelefono.value,
                ciudad: datos.modalCiudad.value
            });
            console.log("Document written with ID: ", docRef.id);
            setTimeout(() => {
                document.getElementById('contactModal').style.display = 'none';
                datos.enviar.classList.remove('flash-success');
            }, 1200);
        } catch (e) {
            console.error("Error adding document: ", e);
            datos.enviar.classList.remove('flash-success');
        }
    });
}

if (datos.btn) {
    datos.btn.addEventListener("click", async function () {
        // call guardarDatos if it's defined
        if (typeof guardarDatos === "function") guardarDatos();
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: datos.nombre.value,
                last: datos.apellido.value,
                born: datos.fecha.value
            });

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    });
}

if (datos.btn2) {
    datos.btn2.addEventListener("click", async function() {
        await setDoc(doc(db, "cities", datos.id.value), {
            first: datos.nombre.value,
            last: datos.apellido.value,
            born: Number(datos.fecha.value)
        });
    });
}

if (datos.buscar2) {
    datos.buscar2.addEventListener("click", async function() {
        const q = query(collection(db, "cities"), where("born", "==", 2005));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            datos.resultado.innerHTML +=   `
                                        <div class="resp">
                                          <div>ID: ${doc.id} </div>
                                          <div>Nombre: ${doc.data().first}</div>
                                          <div>Apellido: ${doc.data().last}</div>
                                          <div>Fecha de Nacimiento: ${doc.data().born}</div>
                                        </div>
                                          `;
            console.log(doc.id, " => ", doc.data());
        });
    });
}
