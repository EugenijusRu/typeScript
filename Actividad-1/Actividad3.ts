const potencia = (base:number,exponente:number): number => {
    return Math.pow(base,exponente)
  };

  console.log(potencia(4,6));

  const potencia2 = (base:number,exponente?:number): number => {
    return Math.pow(base,exponente || 2);
  };

  console.log(potencia2(3));

  const potencia3 = (base:number,exponente = 3 ): number => {
    return Math.pow(base,exponente);
  };
  console.log(potencia3(5,5));  
 

