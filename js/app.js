
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
let arbPesoUruCompra = 1;
let arbPesoUruVenta = 1;
let dolar = 1;
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
        numero: 1,
        moneda: document.getElementById('pesoUru').value,
        compra: pesoUruCompra,
        venta: pesoUruVenta,
        arbitrajeCompra: arbPesoUruCompra,
        arbitrajeVenta: arbPesoUruVenta
    },
    {
        moneda: 'dolar',
        simbolo: 'U$S',
        compra: dolarCompra,
        venta: dolarVenta,
        arbitrajeCompra: arbDolarCompra,
        arbitrajeVenta: arbDolarVenta
    },
    {
        moneda: 'euro',
        simbolo: '€',
        compra: euroCompra,
        venta: euroVenta,
        arbitrajeCompra: arbEuroCompra,
        arbitrajeVenta: arbEuroVenta  
    },
    {
        moneda: 'pesoArg',
        simbolo: '$AR',
        compra: pesoArgCompra,
        venta: pesoArgVenta,
        arbitrajeCompra: arbPesoArgCompra,
        arbitrajeVenta: arbPesoArgVenta  
    },
    {
        moneda: 'real',
        simbolo: '$R',
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

/*addEventListener('load',selectDivisas,false);

function selectDivisas() {
    document.getElementById('monedaRec').addEventListener('change',divisasRec,false);
    document.getElementById('monedaEnt').addEventListener('change',divisasEnt,false);
}*/


/*function divisasRec() {
    const monedaRec = document.getElementById('monedaRec').value;
    const monedaEnt = document.getElementById('monedaEnt').value;

    if(monedaRec === divisas.moneda) {
        let cotRecibido = document.getElementById('cotRecibido');
        cotRecibido.innerHTML = divisas.compra;
        console.log(divisas.compra)             
    }
}*/

//divisasRec();
/*function divisasRec() {
    //alert(document.getElementById('monedaEnt').value);
    console.log(document.getElementById('monedaRec').value);
}
function divisasEnt() {
    //alert(document.getElementById('monedaEnt').value);
    console.log(document.getElementById('monedaEnt').value);
}*/

/* ---------------------------------------------------------------------------------- */

/*function recVenta() {
    //console.log(document.getElementById('recVenta').value);
    let monedaUno = document.getElementById('recVenta').value;
    console.log(monedaUno);


}*/

/* ---------------------------------------------------------------------------------- */




    


/* ---------------------------------------------------------------------------------- */