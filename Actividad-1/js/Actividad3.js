"use strict";
const potencia = (base, exponente) => {
    return Math.pow(base, exponente);
};
console.log(potencia(4, 6));
const potencia2 = (base, exponente) => {
    return Math.pow(base, exponente || 2);
};
console.log(potencia2(3));
const potencia3 = (base, exponente = 3) => {
    return Math.pow(base, exponente);
};
console.log(potencia3(5, 5));
//# sourceMappingURL=Actividad3.js.map