/*creo la clase AUTOS*/
class auto{
    constructor(marca,modelo,estado,precio,disponibilidad,anio)
    {
        this.marca=marca
        this.modelo=modelo
        this.estado=estado
        this.precio=precio
        this.disponibilidad=disponibilidad
        this.anio=anio
    }
}

//creamos autos y con new hacemos  el nuevo objeto
let auto1= new auto("ford","focus","0km",2500000,true,2004)
let auto2 = new auto("ford", "falcon", "usado", 200000, false,1970)
let auto3 = new auto("fiat", "uno", "desconocido", 150000, true,1999)
let auto4 = new auto("VW", "suran", "desconocido", 2, false,2004)
let auto5 = new auto("ferrari", "xxx", "0km", 45000000, true,2010)
let auto6 = new auto("maseratti", "ccc", "nunca taxi", 1500000000, true,2022)

// declaro array
const consecionaria = []

//pusheamos los objetos libros al array concesionaria
consecionaria.push(auto1)
consecionaria.push(auto2)
consecionaria.push(auto3)
consecionaria.push(auto4)
consecionaria.push(auto5)
consecionaria.push(auto6)

//Funciones esenciales del proceso a simular. OK
function mostrarlista(){
console.log(consecionaria);
window.alert("En la consola aparece el listadito");;
}

//tan solo un Método de búsqueda y filtrado sobre el Array OK 
function buscarLista(){
    let ingreso= Number(prompt("ingrese el precio maximo que puede garpar"))
    let preciobara = consecionaria.filter(auto=> auto.precio< ingreso)
    console.log(preciobara);
}




