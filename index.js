let infoPuntaCana = ["Aereos incluídos", "Alojamiento all inclusive", "Todas las comidas cubiertas"]

let botonVerMas = document.getElementById("boton-ver-mas");
let elementoContenedorInfo = document.getElementById("contenedorInfo");
botonVerMas.addEventListener("click", () => mostrarInfo(infoPuntaCana));

function mostrarInfo(contenido){

    if (elementoContenedorInfo.childElementCount == 0) {

        elementoContenedorInfo.innerHTML = "";
     
        for (const text of contenido)
            elementoContenedorInfo.innerHTML += `<p>${text}</p>`;
    
    } else {
        elementoContenedorInfo.innerHTML = "";
    }
}


let infoLondres = ["Aereos incluídos", "Hotel 4 estrellas", "Excursiones incluídas"]

let botonVerLondres = document.getElementById("boton-ver-londres");
let elementoContenedorInfoLondres = document.getElementById("contenedorInfoLondres");
botonVerLondres.addEventListener("click", () => mostrarInfo1(infoLondres));

function mostrarInfo1(contenido){

    if (elementoContenedorInfoLondres.childElementCount == 0) {

        elementoContenedorInfoLondres.innerHTML = "";
     
        for (const text of contenido)
            elementoContenedorInfoLondres.innerHTML += `<p>${text}</p>`;
    
    } else {
        elementoContenedorInfoLondres.innerHTML = "";
    }
}

let infoDisney = ["Aereos incluídos", "Alojamiento all inclusive", "Entrada a los parques incluídas"]

let botonVerDisney = document.getElementById("boton-ver-disney");
let elementoContenedorInfoDisney = document.getElementById("contenedorInfoDisney");
botonVerDisney.addEventListener("click", () => mostrarInfo2(infoDisney));

function mostrarInfo2(contenido){

    if (elementoContenedorInfoDisney.childElementCount == 0) {

        elementoContenedorInfoDisney.innerHTML = "";
     
        for (const text of contenido)
            elementoContenedorInfoDisney.innerHTML += `<p>${text}</p>`;
    
    } else {
        elementoContenedorInfoDisney.innerHTML = "";
    }
}

let infoBrc = ["Opción de aereos o colectivo", "Alojamiento en la montaña", "Set de ski incluído"]

let botonVerBrc = document.getElementById("boton-ver-brc");
let elementoContenedorInfoBrc = document.getElementById("contenedorInfoBrc");
botonVerBrc.addEventListener("click", () => mostrarInfo3(infoBrc));

function mostrarInfo3(contenido){

    if (elementoContenedorInfoBrc.childElementCount == 0) {

        elementoContenedorInfoBrc.innerHTML = "";
     
        for (const text of contenido)
            elementoContenedorInfoBrc.innerHTML += `<p>${text}</p>`;
    
    } else {
        elementoContenedorInfoBrc.innerHTML = "";
    }
}

let infoIguazu = ["Opción de aereos o colectivo", "Hotel 4 estrellas", "Traslados en el destino"]

let botonVerIguazu = document.getElementById("boton-ver-iguazu");
let elementoContenedorInfoIguazu = document.getElementById("contenedorInfoIguazu");
botonVerIguazu.addEventListener("click", () => mostrarInfo4(infoIguazu));

function mostrarInfo4(contenido){

    if (elementoContenedorInfoIguazu.childElementCount == 0) {

        elementoContenedorInfoIguazu.innerHTML = "";
     
        for (const text of contenido)
            elementoContenedorInfoIguazu.innerHTML += `<p>${text}</p>`;
    
    } else {
        elementoContenedorInfoIguazu.innerHTML = "";
    }
}

let infoRio = ["Aereos incluídos", "Alojamiento all inclusive", "Excursiones incluídas"]

let botonVerRio = document.getElementById("boton-ver-rio");
let elementoContenedorInfoRio = document.getElementById("contenedorInfoRio");
botonVerRio.addEventListener("click", () => mostrarInfo5(infoRio));

function mostrarInfo5(contenido){

    if (elementoContenedorInfoRio.childElementCount == 0) {

        elementoContenedorInfoRio.innerHTML = "";
     
        for (const text of contenido)
            elementoContenedorInfoRio.innerHTML += `<p>${text}</p>`;
    
    } else {
        elementoContenedorInfoRio.innerHTML = "";
    }
}