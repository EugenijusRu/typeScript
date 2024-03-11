class CuentaCorriente {
    // Propiedades
    private titular: string;
    private saldo: number;
    private interes: number;
    // Constructor
    constructor(titular:string, saldo:number, interes:number) {
        this.titular = titular;
        this.saldo = saldo;
        this.interes = interes;
    }
    // Métodos
    public setTitular(titular: string): void {
        this.titular = titular;
      }
    
    public setSaldo(saldo: number): void {
        this.saldo = saldo;
      }
    
    public setInteres(interes: number): void {
        this.interes = interes;
      }

    public getTitular(): string {
        return this.titular;
      }
    
    public getSaldo(): number {
        return this.saldo;
      }
    
    public getInteres(): number {
        return this.interes;
      }
      //Crear un método getInteresMensual que devuelva el resultado de la fórmula: saldo*interés/100/12
    public  getInteresesMensuales(): number{
        return this.saldo *  this.interes / 100 / 12;
    }   
      //Crear un método getInteresAnual que devuelva el resultado de la fórmula: saldo*interés/100
    public  getInteresesAnuales(): number{
        return this.saldo  *  this.interes / 100 ;
    }   
}

const cuenta = new  CuentaCorriente("Juan", 500, 4);
console.log( cuenta.getInteresesAnuales());
console.log( cuenta.getInteresesMensuales());

class  CuentaNomina extends  CuentaCorriente {
    private interesAdicional:number;

     // Constructor
     constructor(titular:string, saldo: number, interes: number, interesAdicional: number, ) {
        // super llama al constructor de la clase superior. ClasePersona requería el nombre, el apellido y la edad
        super(titular, saldo, interes);
        this.interesAdicional = interesAdicional;
     }
     public setIntAdicional(interesAdicional: number): void {
        this.interesAdicional = interesAdicional;
      }

    public getIntAdicional(): number {
        return this.interesAdicional;
      }
    //Crear un método getInteresMensualNomina con la fórmula: saldo *(interesAdicional+ interés) / 100/12
    public  getInteresesMensualNomina():number {
      return super.getSaldo()*(this.interesAdicional + super.getInteres()) /100 /12;
    }
    //Crear un método getInteresAnualNomina con la fórmula: saldo *(interesAdicional+ interés) / 100/
    public getInteresAnualNomina():number {
        return super.getSaldo()*(this.interesAdicional +  super.getInteres())/100;
    }
}

//Crear un objeto de la clase y probar algunos de sus métodos.
const cuentaNomina = new CuentaNomina('Jose',1000,5,10);

console.log( cuentaNomina.getIntAdicional());
console.log( cuentaNomina.getInteresAnualNomina());
console.log( cuentaNomina.getTitular());