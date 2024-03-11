// Parte 2
//     • Crear una enumeración con diferentes tipos de IVA. Tendrá la siguiente información: superreducido: 0.04, reducido: 0.10 y general: 0.21.
//     • Aplicar a una constante el IVA general sobre un importe de 1000 y mostrar la constante en consola.
// Parte 3
//     • Crear una función con el nombre calcularIvaGeneral que retorne el IVA general de un importe que se le pasará a la función por argumento. 
//       Utilizaremos la enumeración de la parte 2 para hallar el IVA.
//     • Utilizar la función para calcular el IVA de 2000 y mostrar en consola el resultado.
//     • Crear una función con el nombre calcularIvaGeneralVoid que muestre por consola el IVA general de un importe que se le pasará a la función 
//       por argumento. Utilizaremos la enumeración de la parte 2 para hallar el IVA. 
//     • Utilizar la función pasándole por argumento 3000.

enum iva {
    superreducido = 0.04, 
    reducido = 0.10,
    general = 0.21
}

const precioVenta = 1000;

console.log(precioVenta * iva.general);

function calcularIvaGeneral (importe: number)  :number {
    return  importe * iva.general
}

console.log(calcularIvaGeneral(2000));

function calcularIvaGeneralVoid (importe: number)  :void {
    console.log(importe * iva.general)
}

calcularIvaGeneralVoid(3000)

