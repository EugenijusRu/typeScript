"use strict";
class CuentaCorriente {
    constructor(titular, saldo, interes) {
        this.titular = titular;
        this.saldo = saldo;
        this.interes = interes;
    }
    setTitular(titular) {
        this.titular = titular;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    setInteres(interes) {
        this.interes = interes;
    }
    getTitular() {
        return this.titular;
    }
    getSaldo() {
        return this.saldo;
    }
    getInteres() {
        return this.interes;
    }
    getInteresesMensuales() {
        return this.saldo * this.interes / 100 / 12;
    }
    getInteresesAnuales() {
        return this.saldo * this.interes / 100;
    }
}
const cuenta = new CuentaCorriente("Juan", 500, 4);
console.log(cuenta.getInteresesAnuales());
console.log(cuenta.getInteresesMensuales());
class CuentaNomina extends CuentaCorriente {
    constructor(titular, saldo, interes, interesAdicional) {
        super(titular, saldo, interes);
        this.interesAdicional = interesAdicional;
    }
    setIntAdicional(interesAdicional) {
        this.interesAdicional = interesAdicional;
    }
    getIntAdicional() {
        return this.interesAdicional;
    }
    getInteresesMensualNomina() {
        return super.getSaldo() * (this.interesAdicional + super.getInteres()) / 100 / 12;
    }
    getInteresAnualNomina() {
        return super.getSaldo() * (this.interesAdicional + super.getInteres()) / 100;
    }
}
const cuentaNomina = new CuentaNomina('Jose', 1000, 5, 10);
console.log(cuentaNomina.getIntAdicional());
console.log(cuentaNomina.getInteresAnualNomina());
console.log(cuentaNomina.getTitular());
//# sourceMappingURL=Actividad4.js.map