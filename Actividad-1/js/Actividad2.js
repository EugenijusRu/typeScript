"use strict";
var iva;
(function (iva) {
    iva[iva["superreducido"] = 0.04] = "superreducido";
    iva[iva["reducido"] = 0.1] = "reducido";
    iva[iva["general"] = 0.21] = "general";
})(iva || (iva = {}));
const precioVenta = 1000;
console.log(precioVenta * iva.general);
function calcularIvaGeneral(importe) {
    return importe * iva.general;
}
console.log(calcularIvaGeneral(2000));
function calcularIvaGeneralVoid(importe) {
    console.log(importe * iva.general);
}
calcularIvaGeneralVoid(3000);
//# sourceMappingURL=Actividad2.js.map