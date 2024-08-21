let infoPuntaCana = ["Aereos incluídos", "Alojamiento all inclusive", "Todas las comidas cubiertas"]

let botonVerMas = document.getElementById("boton-ver-mas");
let elementoContenedorInfo = document.getElementById("contenedorInfo");
botonVerMas.addEventListener("click", () => imprimirInfo(infoPuntaCana));

function imprimirInfo(contenido){
    contenido.forEach(item => {
        console.log(item)
    });
}

// for (const servicio of infoPuntaCana) {
//     console.log(servicio)
//     let elementoInfo = document.createElement("p");
//     elementoInfo.textContent = servicio;
//     elementoInfo.classList.add("boton-ver-mas")
//     elementoContenedorInfo.appendChild(elementoInfo);

// }