class producto{
    constructor( tipoDeToston, cantidad, precio, nombre, ID ){
        
        this.tipoDeToston = tipoDeToston;
        this.cantidad = cantidad;
        this.precio = precio;
        this.nombre = nombre; 
        this.ID = ID;
 }
}


const productos = [];

productos.push(new producto('toston', 10 ,100,'bolsaDe500g', 1));
productos.push(new producto('toston con ajo', 10, 150, 'bolsaDe500g', 2));
productos.push(new producto('todton con picante', 10, 130, 'bolsaDe500g', 3));
productos.push(new producto('toston con sal', 10, 120,'bolsaDe500g', 4));
productos.push(new producto('toston de aliño', 10, 150, 'bolsaDe500g', 5));


productos.sort((a,b) => {
    if(a.nombre > b.nombre){
        return 1;
    }
    if(a.nombre < b.nombre){
        return -1;
    }
    return 0;
})
   
    const productoEmcontrado = prompt("Bienvenido a You toston tenemos 5 tipos de tostones: ID: 1 toston,ID: 2 toston con ajo,ID: 3 toston con picante,ID: 4 toston con sal,ID: 5 toston con aliño")
    const entradaDeNombre = prompt("ingrese su nombre")
    const cantidadAbuscar = prompt("ingrese cuantos tostones quiere")
    const entradaDeID = prompt("ingrese su ID")

const productoBuscado = productos.find(producto => producto.tipoDeToston === productoEmcontrado);

if (productoBuscado) {
    if(productoBuscado.cantidad >= cantidadAbuscar){
        productoBuscado.cantidad -= cantidadAbuscar;
        alert(`Gracias por su compra ${entradaDeNombre} El producto ${productoBuscado.tipoDeToston} ya esta en camino hacia su hogar, el costo seria de ${productoBuscado.precio*cantidadAbuscar} BS ¡FELIZ DIA! `);
    } else {
        alert('Lo sentimos, el maximo son 10 unidades por de cada producto.');
    } 
}

