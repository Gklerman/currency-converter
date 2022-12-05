
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













//let cotRecibido = document.getElementById('cotRecibido');
//cotRecibido.value = dolarCompra;

addEventListener('load',selectDivisas,false);

function selectDivisas() {

    document.getElementById('monedaRec').addEventListener('change',divisasRec,false);
    document.getElementById('monedaEnt').addEventListener('change',divisasEnt,false);

    //alert(document.getElementById('monedaEnt').value);

    /*if(selectDivisaOne === divisas.moneda) {
        let cotRecibido = document.getElementById('cotRecibido');
        cotRecibido.value = dolarCompra;
    
    }*/
    
}

    //console.log(monedaRec.value);
    /*document.getElementById('cotRecibido')
    console.log(document.getElementById('monedaRec').value);*/



/*function divisasRec() {
    let cotRecibido = document.getElementById('cotRecibido');
    cotRecibido.value = dolarCompra;
    //document.getElementById('dolarEnt').disabled = true;
    //console.log(cotRecibido);
    //const monedaRec = document.getElementById('monedaRec').value;
    //const monedaEnt = document.getElementById('monedaEnt').value;

}*/


function divisasRec() {
    //console.log(document.getElementById('monedaRec').value);
    let divisaUno = document.getElementById('monedaRec').value;
    if(divisaUno === 'pesoUru') {
        let cotRecibido = document.getElementById('cotRecibido');
        cotRecibido.value = pesoUruCompra;
    } else if(divisaUno === 'dolar') {
        let cotRecibido = document.getElementById('cotRecibido');
        cotRecibido.value = dolarCompra;
    } else if (divisaUno === 'euro') {
        let cotRecibido = document.getElementById('cotRecibido');
        cotRecibido.value = euroCompra;    
    } else if (divisaUno === 'pesoArg') {
        let cotRecibido = document.getElementById('cotRecibido');
        cotRecibido.value = pesoArgCompra;    
    } else if (divisaUno === 'real') {
        let cotRecibido = document.getElementById('cotRecibido');
        cotRecibido.value = realCompra;    
    } else {
        console.log('ERROR');
    }
    //alert(document.getElementById('monedaEnt').value);
    //console.log(document.getElementById('monedaEnt').value);
}

/*let operacionCompra = btnCompra;

//addEventListener('load',selectDivisas,false);

function selectDivisas() {

    let monedaRec = document.getElementById('monedaRec');
    //let monedaEnt = document.getElementById('monedaEnt').addEventListener('change',divisasEnt,false);

    let pesoUruCompra = document.getElementById('pesoUru').value;
    let dolarCompra = document.getElementById('dolar').value;
    let euroCompra = document.getElementById('euro').value;
    let pesoArgCompra = document.getElementById('pesoArg').value;
    let realCompra = document.getElementById('real').value;

    if(monedaRec === dolarCompra && monedaEnt === pesoUruCompra) {
        compra(dolarCompra, pesoUruCompra);    
    } else if(monedaRec === euroCompra && monedaEnt === pesoUruCompra) {
        compra(euroCompra, pesoUruCompra);
    } else if(monedaRec === pesoArgCompra && monedaEnt === pesoUruCompra) {
        compra(pesoArgCompra, pesoUruCompra);
    } else if(monedaRec === realCompra && monedaEnt === pesoUruCompra) {
        compra(realCompra, pesoUruCompra);
    } else {
        console.log("ERROR");
    }

    /*function compra(dolarCompra, pesoUruCompra) {
        let montoRecibido = document.getElementById('montoVenta').value;
    
        let importeEntregado = document.getElementById('entregadoVenta');
        let compra = dolarCompra * pesoUruCompra;
        console.log(compra);
    }*/

    /*function divisasEnt() {
        //alert(document.getElementById('monedaEnt').value);
        console.log(document.getElementById('monedaEnt').value);
    }


}

selectDivisas();*/

/*function divisasRec() {
    let cotRecibido = document.getElementById('cotRecibido');
    cotRecibido.value = dolarCompra;
    //document.getElementById('dolarEnt').disabled = true;
    //console.log(cotRecibido);
    //const monedaRec = document.getElementById('monedaRec').value;
    //const monedaEnt = document.getElementById('monedaEnt').value;

}
function divisasEnt() {
    //alert(document.getElementById('monedaEnt').value);
    //console.log(document.getElementById('monedaEnt').value);
}*/

function compra() {
    let montoRecibido = document.getElementById('montoRecibido').value;
    console.log(montoRecibido);
    let importeEntregado = document.getElementById('importeEntregado');
   // console.log(importeEntregado);
    let compra = dolarCompra * montoRecibido;
    //console.log(compra);
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