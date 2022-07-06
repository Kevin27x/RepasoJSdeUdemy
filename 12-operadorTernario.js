const activo = true; 
//let mensaje = '';

//if (!activo) {
//    mensaje = 'Activo';
//}   else {
//    mensaje = 'Inactivo';
//}

//const mensaje = (!activo) ? 'Activo' : 'Inactivo';

//Util, en caso de querer enviar false cuando no se cumpla la condición (variante de operador ternario)
const mensaje = !activo && 'Activo'
console.log(mensaje);
