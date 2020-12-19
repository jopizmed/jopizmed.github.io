function mayor(num1,num2) {
    var resultado = "Comprobación: \n";
	if(num1 == num2) {
      resultado += " Los números 1 y 2 son iguales";
    }
	if(num1 < num2) {
      resultado += " El número 2 \""+num2+"\" es el mayor";
    }
	if(num1 > num2) {
		resultado += " El número 1 \""+num1+"\" es el mayor";
	}
	alert(resultado);
  return resultado;
}
