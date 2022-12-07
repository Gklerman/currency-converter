
const btnCompra = document.querySelector('#btnCompra');
const divCompra = document.querySelector('.form');

btnCompra.addEventListener("click", function() {
    if(divCompra.style.display === "block") {
        divCompra.style.display = "none";
        document.querySelector('#btnVenta').disabled = false;
        document.querySelector('#btnModificar').disabled = false;
    } else {
        divCompra.style.display = "block";
        document.querySelector('#btnVenta').disabled = true;
        document.querySelector('#btnModificar').disabled = true;
    }
});

/* libreria formato fecha */


addEventListener('load',selectDivisas,false);

function selectDivisas() {

    document.getElementById('monedaRec').addEventListener('change',divisasRec,false);
    document.getElementById('monedaEnt').addEventListener('change',divisasEnt,false);
    
}

function divisasRec() {
    //console.log(document.getElementById('monedaRec').value);
    let divisaUno = document.getElementById('monedaRec').value;
    let cotRecibido = document.getElementById('cotRecibido');
    let arbRecibido = document.getElementById('arbRecibido');

    if(divisaUno === 'dolar') {
        cotRecibido.value = dolarCompra;
        arbRecibido.value = arbDolarCompra;

        document.getElementById('dolarEnt').disabled = true;
        document.getElementById('euroEnt').disabled = false;
        document.getElementById('pesoArgEnt').disabled = false;

    } else if (divisaUno === 'euro') {
        cotRecibido.value = euroCompra; 
        arbRecibido.value = arbEuroCompra;

        document.getElementById('dolarEnt').disabled = false;
        document.getElementById('euroEnt').disabled = true;
        
    } else if (divisaUno === 'pesoArg') {
        cotRecibido.value = pesoArgCompra;
        arbRecibido.value = arbPesoArgCompra;
        
        document.getElementById('euroEnt').disabled = false;
        document.getElementById('pesoArgEnt').disabled = true;
        document.getElementById('realEnt').disabled = false;


    } else if (divisaUno === 'real') {
        cotRecibido.value = realCompra;
        arbRecibido.value = arbRealCompra; 

        document.getElementById('euroEnt').disabled = false;
        document.getElementById('pesoArgEnt').disabled = false;
        document.getElementById('realEnt').disabled = true;

    } else {
        console.log('ERROR');
    }

}

function divisasEnt() {
    //console.log(document.getElementById('monedaRec').value);
    let divisaDos = document.getElementById('monedaEnt').value;
    let cotEntregado = document.getElementById('cotEntregado');
    let arbEntregado = document.getElementById('arbEntregado');

    if(divisaDos === 'pesoUru') {
        cotEntregado.value = pesoUruCompra;
        arbEntregado.value = arbPesoUruCompra;

    } else if(divisaDos === 'dolar') {
        cotEntregado.value = dolarCompra;
        arbEntregado.value = arbDolarCompra;

    } else if (divisaDos === 'euro') {
        cotEntregado.value = euroCompra; 
        arbEntregado.value = arbEuroCompra;
        
    } else if (divisaDos === 'pesoArg') {
        cotEntregado.value = pesoArgCompra;
        arbEntregado.value = arbPesoArgCompra;
        
    } else if (divisaDos === 'real') {
        cotEntregado.value = realCompra;
        arbEntregado.value = arbRealCompra;

    } else {
        console.log('ERROR');
    };

} 


function compra() {
    let montoRecibido = document.getElementById('montoRecibido').value;
    let cotRecibido = document.getElementById('cotRecibido').value;
    
    let importeEntregado = document.getElementById('importeEntregado');
    importeEntregado.value = (montoRecibido * cotRecibido).toFixed(2);
}


const reporteCompra = document.querySelector('#reporteCompra');
const formCompra = document.querySelector('#formCompra');
let reportesCompra = [];


document.addEventListener('DOMContentLoaded', () => {
    reportesCompra = JSON.parse(localStorage.getItem('reportesCompra')) || [];

    renderCompra();
});


    formCompra.addEventListener('submit', agregarReporte)
    
    function agregarReporte(evt) {
        evt.preventDefault();
        const montoRecibido = document.querySelector('#montoRecibido').value;
        const cotRecibido = document.querySelector('#cotRecibido').value;
        const importeEntregado = document.querySelector('#importeEntregado').value;

        const reporteCompraObj = {
            id: Date.now(),
            simbolo: '',
            textMont: montoRecibido,
            textCot: cotRecibido,
            textImp: importeEntregado
        }

        reportesCompra.push(reporteCompraObj);

        renderCompra();

        formCompra.reset();

    }


    function renderCompra() {
    
    limpiarCompra();
    
    if(reportesCompra.length > 0) {
        reportesCompra.forEach(entregadoCompra => {
            
            const li = document.createElement('li');

            li.innerHTML = `<strong>ID:</strong> ${entregadoCompra.id} <strong>Moneda:</strong> ${entregadoCompra.simbolo} <strong>Monto:</strong> ${Math.round(entregadoCompra.textMont).toFixed(2)}`;
            li.dataset.reporteId = importeEntregado.id;
    
            reporteCompra.appendChild(li);
                
        })
    }
    
        sincroStorageCompra();

    }
    
    function limpiarCompra() {
        while(reporteCompra.firstChild) {
            reporteCompra.removeChild(reporteCompra.firstChild);
        }
    }

    function sincroStorageCompra() {
        localStorage.setItem('reportesCompra', JSON.stringify(reportesCompra));
    }