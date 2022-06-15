function comparativo(){


  var a = parseInt(prompt("Informe um número: "));
  var b = parseInt(prompt("Informe mais um número: "));

  if (a && b !== null) {
  
  var soma = a + b;

  const comp1 = 10; // COMP1 =>> COMPARAÇÃO 1
  const comp2 = 20; // COMP2 =>> COMPARAÇÃO 2

  (a === b) ? (y = "Os números " +a+ " e " +b+ " são iguais.") : ( y = "Os números " + a+ " e " +b+ " não são iguais. ");
  
  (soma === comp1) ? (x =  ", que é igual a " + comp1) : (soma > comp1) ? (x =  ", que é maior que " + comp1) : (x = " que é menor que " + comp1);

  (soma === comp2) ? (z = " que é igual a " + comp2) : (soma < comp2) ? (z = " que é menor que " + comp2) : (z = ", que é maior que " + comp2);

  

  alert(y + ` Sua soma é ${soma} ` + x + z);

}
 else {
  alert("Informe Números")
}

}
comparativo();
