const btnVenta = document.querySelector('#btnVenta');
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
});

/* ---------------------------------------------------------------------------------- */
//let cotVenta = document.getElementById('cotVenta');
//cotVenta.value = dolarVenta;

addEventListener('load',divisasVenta,false);

function divisasVenta() {
    document.getElementById('recVenta').addEventListener('change',recVenta,false);
    document.getElementById('entVenta').addEventListener('change',entVenta,false);
}

/*function recVenta() {
    console.log(document.getElementById('recVenta').value);
    const monedaUno = document.getElementById('recVenta').value;

    if(monedaUno === divisas.moneda) {
        document.getElementById("cotEntregado").innerHTML = divisas.compra;    
    }
}*/
function entVenta() {
    console.log(document.getElementById('entVenta').value);
    const monedaDos = document.getElementById('recVenta').value;
}


/* ---------------------------------------------------------------------------------- */

function venta() {
    let montoVenta = document.getElementById('montoVenta').value;
    
    let entregadoVenta = document.getElementById('entregadoVenta');
    entregadoVenta.value = montoVenta / dolarVenta;
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
            simbolo: '$U',
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
    }