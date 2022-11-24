
/* --- COTIZACION DIVISAS --- */

const datosBusqueda = {
    moneda: '',
    compra: '',
    venta: '',
    arbitrajeCompra: '',
    arbitrajeVenta: ''
}

let pesoUruCompra = 1;
let pesoUruVenta = 1;
let dolarCompra = 38.65;
let dolarVenta = 41.15;
let arbDolarCompra = 1.00;
let arbDolarVenta = 1.00;
let euroCompra = 37.54;
let euroVenta = 42.14;
let arbEuroCompra = 0.97;
let arbEuroVenta = 1.02;
let pesoArgCompra = 0.05;
let pesoArgVenta = 0.35;
let arbPesoArgCompra = 823;
let arbPesoArgVenta = 110.42;
let realCompra = 7.25;
let realVenta = 9.25;
let arbRealCompra = 5.67;
let arbRealVenta = 4.17;


const divisas = [
    {
        moneda: 'Dólar',
        compra: dolarCompra,
        venta: dolarVenta,
        arbitrajeCompra: arbDolarCompra,
        arbitrajeVenta: arbDolarVenta
    },
    {
        moneda: 'Euro',
        compra: euroCompra,
        venta: euroVenta,
        arbitrajeCompra: arbEuroCompra,
        arbitrajeVenta: arbEuroVenta  
    },
    {
        moneda: 'Peso Argentino',
        compra: pesoArgCompra,
        venta: pesoArgVenta,
        arbitrajeCompra: arbPesoArgCompra,
        arbitrajeVenta: arbPesoArgVenta  
    },
    {
        moneda: 'Real',
        compra: realCompra,
        venta: realVenta,
        arbitrajeCompra: arbRealCompra,
        arbitrajeVenta: arbRealVenta  
    }
];

function mostrarDivisas(divisas) {
    divisas.forEach(tipoDivisa => {
        console.log(`Moneda: ${tipoDivisa.moneda} Compra: ${tipoDivisa.compra} Venta: ${tipoDivisa.venta} Arbitraje Compra: ${tipoDivisa.arbitrajeCompra} Arbitraje Venta:${tipoDivisa.arbitrajeVenta}`);
        document.write(`<p>Moneda: ${tipoDivisa.moneda} Compra: ${tipoDivisa.compra} Venta: ${tipoDivisa.venta} Arbitraje Compra: ${tipoDivisa.arbitrajeCompra} Arbitraje Venta: ${tipoDivisa.arbitrajeVenta}</p></div>`);
    });
}

function filtrarDivisa() {
    const res = divisas.filter(filtrarMoneda).filter(filtrarCompra).filter(filtrarVenta).filter(filtrarArbCompra).filter(filtrarArbVenta);
    if (res.length) {
        mostrarDivisas(res);
    } else {
        noResultados();
    }
}

function noResultados() {
    console.log("No se encontraron coincidencias");
    document.write("No se encontraron coincidencias");
}

function filtrarMoneda(tipoDivisa) {
    if(datosBusqueda.moneda) {
        return tipoDivisa.moneda === datosBusqueda.moneda;
    }
    return tipoDivisa;
}
function filtrarCompra(tipoDivisa) {
    if(datosBusqueda.compra) {
        return tipoDivisa.compra === datosBusqueda.compra;
    }
    return tipoDivisa;
}
function filtrarVenta(tipoDivisa) {
    if(datosBusqueda.venta) {
        return tipoDivisa.venta === datosBusqueda.venta;
    }
    return tipoDivisa;
}
function filtrarArbCompra(tipoDivisa) {
    if(datosBusqueda.arbitrajeCompra) {
        return tipoDivisa.arbitrajeCompra === datosBusqueda.arbitrajeCompra;
    }
    return tipoDivisa;
}
function filtrarArbVenta(tipoDivisa) {
    if(datosBusqueda.arbitrajeVenta) {
        return tipoDivisa.arbitrajeVenta === datosBusqueda.arbitrajeVenta;
    }
    return tipoDivisa;
}

//mostrarDivisas(divisas);
filtrarDivisa();

/* ---------------------------------------------------------------------------------- */

const iniDia = () => {
    document.getElementById("dolarCompra").innerHTML = `${dolarCompra}`;
    document.getElementById("dolarVenta").innerHTML = `${dolarVenta}`;
    document.getElementById("arbDolarCompra").innerHTML = `${arbDolarCompra}`;
    document.getElementById("arbDolarVenta").innerHTML = `${arbDolarVenta}`;
    document.getElementById("euroCompra").innerHTML = `${euroCompra}`;
    document.getElementById("euroVenta").innerHTML = `${euroVenta}`;
    document.getElementById("arbEuroCompra").innerHTML = `${arbEuroCompra}`;
    document.getElementById("arbEuroVenta").innerHTML = `${arbEuroVenta}`;
    document.getElementById("pesoArgCompra").innerHTML = `${pesoArgCompra}`;
    document.getElementById("pesoArgVenta").innerHTML = `${pesoArgVenta}`;
    document.getElementById("arbPesoArgCompra").innerHTML = `${arbPesoArgCompra}`;
    document.getElementById("arbPesoArgVenta").innerHTML = `${arbPesoArgVenta}`;
    document.getElementById("realCompra").innerHTML = `${realCompra}`;
    document.getElementById("realVenta").innerHTML = `${realVenta}`;
    document.getElementById("arbRealCompra").innerHTML = `${arbRealCompra}`;
    document.getElementById("arbRealVenta").innerHTML = `${arbRealVenta}`;
    document.querySelector('#btnIniciar').disabled = true;
}

/* ---------------------------------------------------------------------------------- */

const btnCompra = document.querySelector('#btnCompra');
const divCompra = document.querySelector('.form');

btnCompra.addEventListener("click", function() {
    if(divCompra.style.display === "block") {
        divCompra.style.display = "none";
    } else {
        divCompra.style.display = "block";
        document.querySelector('#btnVenta').disabled = true;
        document.querySelector('#btnModificar').disabled = true;
    }
});

let cotRecibido = document.getElementById('cotRecibido');
cotRecibido.value = dolarCompra;

function compra() {
    let montoRecibido = document.getElementById('montoRecibido').value;
    
    let importeEntregado = document.getElementById('importeEntregado');
    importeEntregado.value = montoRecibido * dolarCompra;
}


/* ---------------------------------------------------------------------------------- */

const btnVenta = document.querySelector('#btnVenta');
const divVenta = document.querySelector('.formVenta');

btnVenta.addEventListener("click", function() {
    if(divVenta.style.display === "block") {
        divVenta.style.display = "none";
    } else {
        divVenta.style.display = "block";
        document.querySelector('#btnCompra').disabled = true;
        document.querySelector('#btnModificar').disabled = true;
    }
});

let cotVenta = document.getElementById('cotVenta');
cotVenta.value = dolarVenta;

function venta() {
    let montoVenta = document.getElementById('montoVenta').value;
    
    let entregadoVenta = document.getElementById('entregadoVenta');
    entregadoVenta.value = montoVenta / dolarVenta;
}


/* ---------------------------------------------------------------------------------- */

const listaReporte = document.querySelector('#listaReporte');
const form = document.querySelector('#formCompra');
let reportes = [];

/*document.addEventListener('DOMContentLoaded', () => {
    reportes = JSON.parse(localStorage.getItem('reportes'));

    renderHTML();
});*/

form.addEventListener('submit', agregarReporte);

function agregarReporte(evt) {
    evt.preventDefault();
    const montoRecibido = document.querySelector('#montoRecibido').value;
    const cotRecibido = document.querySelector('#cotRecibido').value;
    const importeEntregado = document.querySelector('#importeEntregado').value;

    if(montoRecibido === '' && cotRecibido === '' && importeEntregado === '') {
        console.log("Campos vacios");
    }

    const listaReporteObj = {
        id: Date.now(),
        textMont: montoRecibido,
        textCot: cotRecibido,
        textImp: importeEntregado
    }

    reportes.push(listaReporteObj);

    renderHTML();

    form.reset();
}


function renderHTML() {
    
    limpiarHTML();

    if(reportes.length > 0) {
        reportes.forEach(importeEntregado => {
            const li = document.createElement('li');

            li.textContent = importeEntregado.textImp;
            //li.textContent = cotRecibido.textCot;
            //li.textContent = importeEntregado.textImp;
            li.dataset.reporteId = importeEntregado.id;

            listaReporte.appendChild(li);
            
        })
    }

    sincroStorage();
}

function limpiarHTML() {
    while(listaReporte.firstChild) {
        listaReporte.removeChild(listaReporte.firstChild);
    }
}

function sincroStorage() {
    localStorage.setItem('reportes', JSON.stringify(reportes));
}