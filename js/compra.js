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


//let cotRecibido = document.getElementById('cotRecibido');
//cotRecibido.value = dolarCompra;

addEventListener('load',selectDivisas,false);

function selectDivisas() {
    document.getElementById('monedaRec').addEventListener('change',divisasRec,false);
    document.getElementById('monedaEnt').addEventListener('change',divisasEnt,false);
}


/*function divisasRec() {
    //const monedaRec = document.getElementById('monedaRec').value;
    //const monedaEnt = document.getElementById('monedaEnt').value;

    if(monedaRec === divisas.moneda) {
        let cotRecibido = document.getElementById('cotRecibido');
        cotRecibido.innerHTML = divisas.compra;
        console.log(divisas.compra)             
    }
}

divisasRec();*/
function divisasRec() {
    //alert(document.getElementById('monedaEnt').value);
    console.log(document.getElementById('monedaRec').value);
}
function divisasEnt() {
    //alert(document.getElementById('monedaEnt').value);
    console.log(document.getElementById('monedaEnt').value);
}


function compra() {
    
    let montoRecibido = document.getElementById('montoRecibido').value;
    
    let importeEntregado = document.getElementById('importeEntregado');
    importeEntregado.value = montoRecibido * dolarCompra;
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
            simbolo: 'U$S',
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