document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();

        if (nombre === '' || apellido === '' || email === '' || telefono === '') {
            alert('Por favor, rellene todos los campos del formulario.');
            return;
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        if (!/^\d{10}$/.test(telefono)) {
            alert('Por favor, ingrese un número de teléfono válido de 10 dígitos.');
            return;
        }

        // Simulate sending data
        console.log('Nombre:', nombre);
        console.log('Apellido:', apellido);
        console.log('Email:', email);
        console.log('Teléfono:', telefono);

        alert('¡Formulario enviado con éxito!');
        contactForm.reset();
    });
});
