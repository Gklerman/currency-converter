const btnVenta = document.querySelector('#btnVenta');
const divVenta = document.querySelector('.formVenta');

btnVenta.addEventListener("click", function() {
    if(divVenta.style.display === "block") {
        divVenta.style.display = "none";
        document.querySelector('#btnCompra').disabled = false;
        document.querySelector('#btnModificar').disabled = true;
    } else {
        divVenta.style.display = "block";
        document.querySelector('#btnCompra').disabled = true;
        document.querySelector('#btnModificar').disabled = true;
    }
});

/* libreria formato fecha */


addEventListener('load',selectDivisas,false);

function selectDivisas() {

    document.getElementById('recVenta').addEventListener('change',divisasRec,false);
    document.getElementById('entVenta').addEventListener('change',divisasEnt,false);
    
}

function divisasRec() {
    //console.log(document.getElementById('monedaRec').value);
    let divisaUno = document.getElementById('recVenta').value;
    let cotVenta = document.getElementById('cotVenta');
    let arbRecibido = document.getElementById('arbRecibido');

    if(divisaUno === 'dolar') {
        cotVenta.value = dolarVenta;
        arbRecibido.value = arbDolarVenta;

        document.getElementById('entDolarVenta').disabled = true;
        document.getElementById('euroVenta').disabled = false;
        document.getElementById('pesoArgVenta').disabled = false;

    } else if (divisaUno === 'euro') {
        cotVenta.value = euroVenta; 
        arbRecibido.value = arbEuroVenta;

        document.getElementById('entDolarVenta').disabled = false;
        document.getElementById('euroVenta').disabled = true;
        
    } else if (divisaUno === 'pesoArg') {
        cotVenta.value = pesoArgVenta;
        arbRecibido.value = arbPesoArgVenta;
        
        document.getElementById('euroVenta').disabled = false;
        document.getElementById('pesoArgVenta').disabled = true;
        document.getElementById('realVenta').disabled = false;


    } else if (divisaUno === 'real') {
        cotVenta.value = realVenta;
        arbRecibido.value = arbRealVenta; 

        document.getElementById('euroVenta').disabled = false;
        document.getElementById('pesoArgVenta').disabled = false;
        document.getElementById('realVenta').disabled = true;

    } else {
        console.log('ERROR');
    }

}

function divisasEnt() {
    //console.log(document.getElementById('monedaRec').value);
    let divisaDos = document.getElementById('entVenta').value;
    let cotEntregado = document.getElementById('cotEntregado');
    let arbEntregado = document.getElementById('arbEntregado');

    if(divisaDos === 'pesoUru') {
        cotEntregado.value = pesoUruVenta;
        arbEntregado.value = arbPesoUruVenta;

    } else if(divisaDos === 'dolar') {
        cotEntregado.value = dolarVenta;
        arbEntregado.value = arbDolarVenta;

    } else if (divisaDos === 'euro') {
        cotEntregado.value = euroVenta; 
        arbEntregado.value = arbEuroVenta;
        
    } else if (divisaDos === 'pesoArg') {
        cotEntregado.value = pesoArgVenta;
        arbEntregado.value = arbPesoArgVenta;
        
    } else if (divisaDos === 'real') {
        cotEntregado.value = realVenta;
        arbEntregado.value = arbRealVenta;

    } else {
        console.log('ERROR');
    };

} 


function venta() {
    let montoVenta = document.getElementById('montoVenta').value;
    let cotVenta = document.getElementById('cotVenta').value;
    
    let entregadoVenta = document.getElementById('entregadoVenta');
    entregadoVenta.value = (montoVenta * cotVenta).toFixed(2);
}


const reporteVenta = document.querySelector('#reporteVenta');
const formVenta = document.querySelector('#formVenta');
let reportesVenta = [];


document.addEventListener('DOMContentLoaded', () => {
    reportesVenta = JSON.parse(localStorage.getItem('reportesVenta')) || [];

    renderVenta();
});


    formVenta.addEventListener('submit', agregarReporteVenta)
    
    function agregarReporteVenta(evt) {
        evt.preventDefault();
        const montoVenta = document.querySelector('#montoVenta').value;
        const cotVenta = document.querySelector('#cotVenta').value;
        const importeVenta = document.querySelector('#entregadoVenta').value;

        const reporteVentaObj = {
            id: Date.now(),
            simbolo: '',
            textMont: montoVenta,
            textCot: cotVenta,
            textImp: importeVenta
        }

        reportesVenta.push(reporteVentaObj);

        renderVenta();

        formVenta.reset();

    }


    function renderVenta() {
    
    limpiarVenta();
    
    if(reportesVenta.length > 0) {
        reportesVenta.forEach(ventaEntregado => {
            
            const li = document.createElement('li');

            li.innerHTML = `<strong>ID:</strong> ${ventaEntregado.id} <strong>Moneda:</strong> ${ventaEntregado.simbolo} <strong>Monto:</strong> ${Math.round(ventaEntregado.textMont).toFixed(2)}`;
            li.dataset.reporteId = importeVenta.id;
    
            reporteVenta.appendChild(li);
                
        })
    }
    
        sincroStorageVenta();

    }
    
    function limpiarVenta() {
        while(reporteVenta.firstChild) {
            reporteVenta.removeChild(reporteVenta.firstChild);
        }
    }

    function sincroStorageVenta() {
        localStorage.setItem('reportesVenta', JSON.stringify(reportesVenta));
    }


/*const btnVenta = document.querySelector('#btnVenta');
const divVenta = document.querySelector('.formVenta');

btnVenta.addEventListener("click", function() {
    if(divVenta.style.display === "block") {
        divVenta.style.display = "none";
        document.querySelector('#btnCompra').disabled = false;
        document.querySelector('#btnModificar').disabled = false;
    } else {
        divVenta.style.display = "block";
        document.querySelector('#btnCompra').disabled = true;
        document.querySelector('#btnModificar').disabled = true;
    }
});*/

/* ---------------------------------------------------------------------------------- */
//let cotVenta = document.getElementById('cotVenta');
//cotVenta.value = dolarVenta;

/*addEventListener('load',divisasVenta,false);

function divisasVenta() {
    document.getElementById('recVenta').addEventListener('change',recVenta,false);
    document.getElementById('entVenta').addEventListener('change',entVenta,false);
}

function recVenta() {
    console.log(document.getElementById('recVenta').value);
    const monedaUno = document.getElementById('recVenta').value;

    if(monedaUno === divisas.moneda) {
        document.getElementById("cotEntregado").innerHTML = divisas.compra;    
    }
}
function entVenta() {
    console.log(document.getElementById('entVenta').value);
    const monedaDos = document.getElementById('recVenta').value;
}*/


/* ---------------------------------------------------------------------------------- */

/*function venta() {
    let montoVenta = document.getElementById('montoVenta').value;
    
    let entregadoVenta = document.getElementById('entregadoVenta');
    entregadoVenta.value = montoVenta / dolarCompra;
}

    const reporteVenta = document.querySelector('#reporteVenta');
    const formVenta = document.querySelector('#formVenta');
    let reportesVenta = [];

    document.addEventListener('DOMContentLoaded', () => {
        reportesVenta = JSON.parse(localStorage.getItem('reportesVenta')) || [];
    
        renderVenta();
    });

    
    formVenta.addEventListener('submit', agregarReporte);

    function agregarReporte(evt) {
        evt.preventDefault();
        const montoVenta = document.querySelector('#montoVenta').value;
        const cotVenta = document.querySelector('#cotVenta').value;
        const entregadoVenta = document.querySelector('#entregadoVenta').value;

        if(montoVenta === '' && cotVenta === '' && entregadoVenta === '') {
            console.log("Campos vacios");
        }

        const reporteVentaObj = {
            id: Date.now(),
            simbolo: '',
            textMont: montoVenta,
            textCot: cotVenta,
            textImp: entregadoVenta
        }

        reportesVenta.push(reporteVentaObj);

        renderVenta();

        formVenta.reset();
    }

    function renderVenta() {
    
        limpiarVenta();
    
        if(reportesVenta.length > 0) {
            reportesVenta.forEach(entregadoVenta => {

                const li = document.createElement('li');
    
                li.innerHTML = `<strong>ID:</strong> ${entregadoVenta.id} <strong>Moneda:</strong> ${entregadoVenta.simbolo} <strong>Monto:</strong> ${Math.round(entregadoVenta.textMont).toFixed(2)}`;
                li.dataset.reporteId = entregadoVenta.id;
    
                reporteVenta.appendChild(li);
                
            })
        }
    
        sincroStorageVenta();
    }
    
    function limpiarVenta() {
        while(reporteVenta.firstChild) {
            reporteVenta.removeChild(reporteVenta.firstChild);
        }
    }

    function sincroStorageVenta() {
        localStorage.setItem('reportesVenta', JSON.stringify(reportesVenta));
    }*/