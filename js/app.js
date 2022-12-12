
const key = '370ad87a08aca4b49527334f';

const lista = document.querySelectorAll(".lista select");
const divisaUno = document.querySelector(".divisaUno select");
const divisaDos = document.querySelector(".divisaDos select");
boton = document.querySelector("form button");

for (let i = 0; i < lista.length; i++) {

    for(divisasPaises in codigoPais) {
        let selected;
        if(i == 0) {
            selected = divisasPaises == "USD" ? "selected" : ""; 
        } else if(i == 1) {
            selected = divisasPaises == "UYU" ? "selected" : "";    
        }

        let option = `<option value="${divisasPaises}" ${selected}>${divisasPaises}</option>`;
        lista[i].insertAdjacentHTML("beforeend", option);
    }
    lista[i].addEventListener("change", el => {
        loadFlag(el.target);    
    });    
}

function loadFlag(element) {
    for(codigo in codigoPais) {
        if(codigo == element.value) {
            let img = element.parentElement.querySelector("img");
            img.src = `https://flagsapi.com/${codigoPais[codigo]}/flat/32.png`;
        }
    }
}

window.addEventListener("load", () => {
    confirmCompra();
});

boton.addEventListener("click", el => {
    el.preventDefault();
    confirmCompra();
});


function confirmCompra() {
    const monto = document.querySelector(".monto input");
    const cambioTxt = document.querySelector(".cambio");
    const importe = document.querySelector(".importe");
    let montoRecibido = monto.value;
    
    if(montoRecibido == "" || montoRecibido == "0") {
        monto.value = "1";
        montoRecibido = 1;
    }

    cambioTxt.innerText = "Espere un momento...";
    let url = `https://v6.exchangerate-api.com/v6/${key}/latest/${divisaUno.value}`;
    fetch(url) 
        .then(respuesta => {
            return respuesta.json();   
        })
        .then(resultado => {
            let cambio = resultado.conversion_rates[divisaDos.value];
            
            let total = (montoRecibido * cambio).toFixed(2);
            cambioTxt.innerText = "";
            importe.value = total;
            
        })
        .catch(() => {
            cambioTxt.innerText = "No hay datos.";
        });
}    

class Divisa {
    constructor(moneda, simbolo, compra, venta, arbCompra, arbVenta) {
        this.moneda = moneda;
        this.simbolo = simbolo;
        this.compra = compra;
        this.venta = venta;
        this.arbCompra = arbCompra;
        this.arbVenta = arbVenta;
    }
};

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
        moneda: 'pesoUru',
        simbolo: 'UY$',
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

/*const pesoUru = new Divisa("Peso Uruguayo", "UYU", 1, 1, 1, 1);
const dolar = new Divisa("Dolar", "U$S", 38.65, 41.15, 1, 1);
const euro = new Divisa("Euro", "€", 37.54, 42.14, 0.97, 1.02);
const pesoArg = new Divisa("Peso Argentino", "AR$", 0.05, 0.35, 823, 110.42);
const real = new Divisa("Real", "R$", 7.25, 9.25, 5.67, 4.17);


const iniDia = () => {
    document.getElementById("dolarCompra").innerHTML = `${dolar.compra}`;
    document.getElementById("dolarVenta").innerHTML = `${dolar.venta}`;
    document.getElementById("arbDolarCompra").innerHTML = `${dolar.arbCompra}`;
    document.getElementById("arbDolarVenta").innerHTML = `${dolar.arbVenta}`;
    document.getElementById("euroCompra").innerHTML = `${euro.compra}`;
    document.getElementById("euroVenta").innerHTML = `${euro.venta}`;
    document.getElementById("arbEuroCompra").innerHTML = `${euro.arbCompra}`;
    document.getElementById("arbEuroVenta").innerHTML = `${euro.arbVenta}`;
    document.getElementById("pesoArgCompra").innerHTML = `${pesoArg.compra}`;
    document.getElementById("pesoArgVenta").innerHTML = `${pesoArg.venta}`;
    document.getElementById("arbPesoArgCompra").innerHTML = `${pesoArg.arbCompra}`;
    document.getElementById("arbPesoArgVenta").innerHTML = `${pesoArg.arbVenta}`;
    document.getElementById("realCompra").innerHTML = `${real.compra}`;
    document.getElementById("realVenta").innerHTML = `${real.venta}`;
    document.getElementById("arbRealCompra").innerHTML = `${real.arbCompra}`;
    document.getElementById("arbRealVenta").innerHTML = `${real.arbVenta}`;
    document.querySelector('#btnIniciar').disabled = true;
}*/