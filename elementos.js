let btn = document.querySelector("#guardar");
let btn2 = document.querySelector("#guardar2");
let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let fecha = document.querySelector("#fecha");
let buscar2 = document.querySelector("#buscar2");
let buscar = document.querySelector("#buscar");
let resultado = document.querySelector("#resultado");
let id = document.querySelector("#id");


let modalNombre = document.getElementById("modalNombre");
let modalApellido = document.getElementById("modalApellido");
let modalEmail = document.getElementById("modalEmail");
let modalTelefono = document.getElementById("modalTelefono");
let modalCiudad = document.getElementById("modalCiudad");
let enviar = document.getElementById("enviar");

export function getDatos() {
    return {
        btn,
        btn2,
        nombre,
        apellido,
        fecha,
        id,
        buscar,
        buscar2,
        resultado,
        modalNombre,
        modalApellido,
        modalEmail,
        modalTelefono,
        modalCiudad,
        enviar
    };
}