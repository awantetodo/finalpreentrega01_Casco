//declaro mis variables:
let precio, arrayIvas=[], precioIVA, cuotas;

//defino el Element "historial" (span en el index)
const historialElement=document.getElementById("historial");

//LA CONSTANTE IVA (xD)
const iva = 1.21;

function calcularIVA(){
    precio = parseInt (prompt ("Ingresar el monto de tu producto"));
    cuotas = parseInt (prompt ("indica cantidad de cuotas"));
    
    precioIVA = precio / cuotas * iva ;

    arrayIvas.push(precioIVA);
    actualizarHistorial();
    return alert("El precio del IVA es: "+precioIVA);
}

function actualizarHistorial(){
historialElement.innerHTML=arrayIvas.join(", ");
}
    