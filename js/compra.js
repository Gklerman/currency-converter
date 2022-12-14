
const btnCompra = document.querySelector('#btnCompra');
const divCompra = document.querySelector('.form');

btnCompra.addEventListener("click", function() {
    if(divCompra.style.display === "block") {
        divCompra.style.display = "none";
        document.querySelector('#btnVenta').disabled = false;
        document.querySelector('#btnModificar').disabled = true;
    } else {
        divCompra.style.display = "block";
        document.querySelector('#btnVenta').disabled = true;
        document.querySelector('#btnModificar').disabled = true;
    }
});

const reporteCompra = document.querySelector('#reporteCompra');
const insertData = document.querySelector('#formCompra');
let reportesCompra = [];


document.addEventListener('DOMContentLoaded', () => {
    reportesCompra = JSON.parse(localStorage.getItem('reportesCompra')) || [];

    renderCompra();
});


    insertData.addEventListener('submit', agregarReporte)
    
    function agregarReporte(evt) {
        evt.preventDefault();
        const montoRecibido = document.querySelector('.monto').value;
        const importeEntregado = document.querySelector('.importe').value;

        const reporteCompraObj = {
            id: Date.now(),
            simbolo: '',
            textMont: montoRecibido,
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

            li.innerHTML = `<strong>ID:</strong> ${entregadoCompra.id} <strong>Monto:</strong> ${Math.round(entregadoCompra.textMont).toFixed(2)}`;
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