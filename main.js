const experiencia = {
    titulo: "autonomo",
    fecha: "2003- actualidad",
}

const cargos = [
    {
        titulo: "importar",
        descripcion: "encargado de importar género de asia",
    },
    {
        titulo: "venta al por mayor",
        descripcion: "encargado de venta al por mayor",
    },
    {
        titulo: "venta en tienda fisica",
        descripcion: "venta al por menor en tienda",
    },
    {
        titulo: "venta en festivales",
        descripcion: "venta en stand en festivales por toda españa",
    },

]

const habilidades = [
    {
        titulo: "negociación",
        habilidad: 8,
    },
    {
        titulo: "atención al público",
        habilidad: 10,
    },
    {
        titulo: "autonomía",
        habilidad: 8,
    },
    {
        titulo: "gestión de extrés",
        habilidad: 8,
    },
    {
        titulo: "html,css,js",
        habilidad: 3,
    },
]

function pintarHabilidades() {
    let seccionHabilidades = document.getElementById("habilidades");
    for (let i = 0; i < habilidades.length; i++) {
        const element = habilidades[i];
        const contenedor = document.createElement("div");
        const parrafo = document.createElement("p");
        const barra = document.createElement("progress");
        parrafo.innerText = element.titulo;
        barra.max = 10;
        barra.value = element.habilidad;
        contenedor.append(parrafo, barra);
        contenedor.className = "habilidad";

        seccionHabilidades.appendChild(contenedor);
        console.log(seccionHabilidades);
    }
}
pintarHabilidades();

function pintarCargos() {
    let seccionCargos = document.getElementById("cargos");
    for (let i = 0; i < cargos.length; i++) {
        const element = cargos[i];
        const contenedor = document.createElement("div");
        const h3 = document.createElement("h3");
        const parrafo = document.createElement("p");
        h3.innerText = element.titulo;
        parrafo.innerText = element.descripcion;
        contenedor.append(h3, parrafo);
        contenedor.className = "cargos";

        seccionCargos.appendChild(contenedor);
        console.log(seccionCargos);
    }
}
pintarCargos();

document.getElementById("imprimir").addEventListener("click", addNewTask);

function addNewTask() {
    let areYouSure = confirm("¿Quieres imprimir?");

    if (areYouSure) {
        window.print();
    }
}