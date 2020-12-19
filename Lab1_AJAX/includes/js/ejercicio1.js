
function palindromo(cadena) {
	//var cadena=document.cadenaPal;
  var resultado = "La cadena \""+cadena+"\" \n";
alert(resultado);
  // Pasar a minusculas la cadena
  var cadenaOriginal = cadena.toString().toLowerCase();
alert(cadenaOriginal);
  // Convertir la cadena en un array
  var letrasEspacios = cadenaOriginal.split("");

  // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
  var cadenaSinEspacios = "";
  for(i in letrasEspacios) {
    if(letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }

  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();

  // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
  var iguales = true;
  for(i in letras) {
    if(letras[i] == letrasReves[i]) {
      // Todo bien
    }
    else {
      // Alguna letra es distinta, por lo que ya no es un palindromo
      iguales = false;
    }
  }

  if(iguales) {
    resultado += " ES un palíndromo";
  }
  else {
    resultado += " NO es un palíndromo";
  }
	alert(resultado);
  return resultado;
}
