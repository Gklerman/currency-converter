
/* --- COTIZACION DIVISAS --- */

const datosBusqueda = {
    moneda: '',
    compra: '',
    venta: '',
    arbitrajeCompra: '',
    arbitrajeVenta: ''
}

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

function fitrarDivisa() {
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
fitrarDivisa();

/* ---------------------------------------------------------------------------------- */

const iniDia = () => {
    document.getElementById("dolarCompra").innerHTML += `${dolarCompra}`;
    document.getElementById("dolarVenta").innerHTML += `${dolarVenta}`;
    document.getElementById("arbDolarCompra").innerHTML += `${arbDolarCompra}`;
    document.getElementById("arbDolarVenta").innerHTML += `${arbDolarVenta}`;
    document.getElementById("euroCompra").innerHTML += `${euroCompra}`;
    document.getElementById("euroVenta").innerHTML += `${euroVenta}`;
    document.getElementById("arbEuroCompra").innerHTML += `${arbEuroCompra}`;
    document.getElementById("arbEuroVenta").innerHTML += `${arbEuroVenta}`;
    document.getElementById("pesoArgCompra").innerHTML += `${pesoArgCompra}`;
    document.getElementById("pesoArgVenta").innerHTML += `${pesoArgVenta}`;
    document.getElementById("arbPesoArgCompra").innerHTML += `${arbPesoArgCompra}`;
    document.getElementById("arbPesoArgVenta").innerHTML += `${arbPesoArgVenta}`;
    document.getElementById("realCompra").innerHTML += `${realCompra}`;
    document.getElementById("realVenta").innerHTML += `${realVenta}`;
    document.getElementById("arbRealCompra").innerHTML += `${arbRealCompra}`;
    document.getElementById("arbRealVenta").innerHTML += `${arbRealVenta}`;
    document.querySelector('#btnIniciar').disabled = true;
}

console.log("--------------------");
console.log("1 - Operación de Compra");
console.log("2 - Operación de Venta");
console.log("3 - Cambiar valores")
console.log("4 - Salir");

let operacion = prompt("Ingresar Tipo de Operación");
if(operacion == 1) {

    /* --- COMPRA DE DIVISAS --- */

    console.log("--------------------");                                                                 
    console.log("1 - Dólar");
    console.log("2 - Euro");
    console.log("3 - Peso Argentino");
    console.log("4 - Real");
    console.log("5 - Salir");

    let compraMoneda = prompt("Ingresa Divisa");

    if(compraMoneda == 1) {
        let montoDolar = Number(prompt("Recibe Dólares"));
        compraDivisa(dolarVenta, montoDolar, "Dólares", "Pesos Uruguayos");   
    } else if(compraMoneda == 2) {
        let montoEuro = Number(prompt("Recibe Euros"));
        compraDivisa(euroCompra, montoEuro, "Euros", "Pesos Uruguayos");    
    } else if(compraMoneda == 3) {
        let montoPesoArg = Number(prompt("Recibe Pesos Argentinos"));
        compraDivisa(pesoArgCompra, montoPesoArg, "Pesos Argentinos", "Pesos Uruguayos");
    } else if(compraMoneda == 4) {
        let montoReal = Number(prompt("Recibe Reales"));
        compraDivisa(realCompra, montoReal, "Reales", "Pesos Uruguayos");
    } else {
        if(compraMoneda == 5) {
            salir();
        }
    }

    function compraDivisa(dolarCompra, montoDolar, divisa, segundaDivisa) {
        let compra = montoDolar * dolarCompra;
        document.write(`<div>
                            <h3>Seleccionaste ${divisa}</h3>
                            <p>Monto a comprar ${montoDolar.toFixed(2)} ${divisa} a ${dolarCompra.toFixed(2)}</p>
                            <p>El total es de ${compra.toFixed(2)} = ${Math.round(compra).toFixed(2)} ${segundaDivisa}</p>
                        </div>`); 
    }

    function salir() {
        alert("Proceso cancelado");
    }

} else if(operacion == 2) {

    /* --- VENTA DE DIVISAS --- */
    
    console.log("--------------------");                                                                 
    console.log("1 - Dólar");
    console.log("2 - Euro");
    console.log("3 - Peso Argentino");
    console.log("4 - Real");
    console.log("5 - Salir");

    let ventaMoneda = prompt("Ingresa Divisa");

    if(ventaMoneda == 1) {

        let montoDolar = Number(prompt("Recibe Pesos Uruguayos"));
        ventaDivisa(dolarVenta, montoDolar, "Dólares", "Pesos Uruguayos"); 

    } else if(ventaMoneda == 2) {

        let montoEuro = Number(prompt("Recibe Pesos Uruguayos"));
        ventaDivisa(euroVenta, montoEuro, "Euros", "Pesos Uruguayos"); 

    } else if(ventaMoneda == 3) {

        let montoPesoArg = Number(prompt("Recibe Pesos Uruguayos"));
        ventaDivisa(pesoArgVenta, montoPesoArg, "Pesos Argentinos", "Pesos Uruguayos");

    } else if(ventaMoneda == 4) {

        let montoReal = Number(prompt("Recibe Pesos Uruguayos"));
        ventaDivisa(realVenta, montoReal, "Reales", "Pesos Uruguayos");

    } else {

        if(ventaMoneda == 5) {
            salir();
        }
    }

    function ventaDivisa(dolarVenta, montoDolar, divisa, segundaDivisa) {
        let venta = montoDolar / dolarVenta;
        document.write(`<div>
                            <h3>Seleccionaste ${divisa}</h3>
                            <p>Monto a vender ${montoDolar.toFixed(2)} ${segundaDivisa} a ${dolarVenta.toFixed(2)}</p>
                            <p>El total es de ${venta.toFixed(2)} = ${Math.round(venta).toFixed(2)} ${divisa}</p>
                        </div>`);
    }

    function salir() {
        alert("Proceso cancelado");
    }

} else if(operacion == 3) {

    console.log("--------------------");                                                                 
    console.log("1 - Dólar");
    console.log("2 - Euro");
    console.log("3 - Peso Argentino");
    console.log("4 - Real");
    console.log("5 - Salir");

    let valorDivisa = prompt("Que deseas cambiar?")

    if(valorDivisa == 1) {

        console.log("--------------------");                                                                 
        console.log("1 - Dólar Compra");
        console.log("2 - Dólar Venta");
        console.log("3 - Arbitraje Dólar Compra");
        console.log("4 - Arbitraje Dólar Venta");
        console.log("5 - Salir");

        let cambioDolar = prompt("Elige opción");

        if(cambioDolar == 1) {

            valorCompraDolar = Number(prompt("Ingresa nuevo valor"));
            dolarCompra = valorCompraDolar;
    
        } else if(cambioDolar == 2) {
    
            valorVentaDolar = Number(prompt("Ingresa nuevo valor"));
            dolarVenta = valorVentaDolar;
    
        } else if(cambioDolar == 3) {
    
            valorArbCompra = Number(prompt("Ingresa nuevo valor"));
            arbDolarCompra = valorArbCompra;
    
        } else if(cambioDolar == 4) {
    
            valorArbVenta = Number(prompt("Ingresa nuevo valor"));
            arbDolarVenta = valorArbVenta;
    
        } else {
    
            if(cambioDolar == 5) {
                salir();
            }
    
        }

    } else if(valorDivisa == 2) {

        console.log("--------------------");                                                                 
        console.log("1 - Euro Compra");
        console.log("2 - Euro Venta");
        console.log("3 - Arbitraje Euro Compra");
        console.log("4 - Arbitraje Euro Venta");
        console.log("5 - Salir");

        let cambioEuro = prompt("Elige opción");

        if(cambioEuro == 1) {

            valorCompraEuro = Number(prompt("Ingresa nuevo valor"));
            euroCompra = valorCompraEuro;
    
        } else if(cambioEuro == 2) {
    
            valorVentaEuro = Number(prompt("Ingresa nuevo valor"));
            euroVenta = valorVentaEuro;
    
        } else if(cambioEuro == 3) {
    
            valorArbCompra = Number(prompt("Ingresa nuevo valor"));
            arbEuroCompra = valorArbCompra;
    
        } else if(cambioEuro == 4) {
    
            valorArbVenta = Number(prompt("Ingresa nuevo valor"));
            arbEuroVenta = valorArbVenta;
    
        } else {
    
            if(cambioEuro == 5) {
                salir();
            }
    
        }    

    } else if(valorDivisa == 3) {

        console.log("--------------------");                                                                 
        console.log("1 - Peso Argentino Compra");
        console.log("2 - Peso Argentino Venta");
        console.log("3 - Arbitraje Peso Argentino Compra");
        console.log("4 - Arbitraje Peso Argentino Venta");
        console.log("5 - Salir");

        let cambioPesoArg = prompt("Elige opción");

        if(cambioPesoArg == 1) {

            valorCompraPesoArg = Number(prompt("Ingresa nuevo valor"));
            pesoArgCompra = valorCompraPesoArg;
    
        } else if(cambioPesoArg == 2) {
    
            valorVentaPesoArg = Number(prompt("Ingresa nuevo valor"));
            pesoArgVenta = valorVentaPesoArg;
    
        } else if(cambioPesoArg == 3) {
    
            valorArbCompra = Number(prompt("Ingresa nuevo valor"));
            arbPesoArgCompra = valorArbCompra;
    
        } else if(cambioPesoArg == 4) {
    
            valorArbVenta = Number(prompt("Ingresa nuevo valor"));
            arbPesoArgVenta = valorArbVenta;
    
        } else {
    
            if(cambioPesoArg == 5) {
                salir();
            }
    
        }

    } else if(valorDivisa == 4) {

        console.log("--------------------");                                                                 
        console.log("1 - Real Compra");
        console.log("2 - Real Venta");
        console.log("3 - Arbitraje Real Compra");
        console.log("4 - Arbitraje Real Venta");
        console.log("5 - Salir");

        let cambioReal = prompt("Elige opción");

        if(cambioReal == 1) {

            valorCompraReal = Number(prompt("Ingresa nuevo valor"));
            realCompra = valorCompraReal;
    
        } else if(cambioReal == 2) {
    
            valorVentaReal = Number(prompt("Ingresa nuevo valor"));
            realVenta = valorVentaReal;
    
        } else if(cambioReal == 3) {
    
            valorArbCompra = Number(prompt("Ingresa nuevo valor"));
            arbRealCompra = valorArbCompra;
    
        } else if(cambioReal == 4) {
    
            valorArbVenta = Number(prompt("Ingresa nuevo valor"));
            arbRealVenta = valorArbVenta;
    
        } else {
    
            if(cambioReal == 5) {
                salir();
            }
    
        }    

    } else {

        if(valorDivisa == 5) {
            salir();
        } 

    }

} else {

    if(operacion == 4) {
        salir();
    }
}

function salir() {
    alert("Proceso cancelado");
}

