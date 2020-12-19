function vocalesCount(cadena) {
	var resultado = "Las vocales que aparecen son : \n";
	var vocales_list = 'aáeéiíoóuúAÁEÉIÍOÓUÚ';
	//var cuenta = 0;
	var cuentaA = 0;
	var cuentaE = 0;
	var cuentaI = 0;
	var cuentaO = 0;
	var cuentaU = 0;
	for(var x = 0; x < cadena.length ; x++)
	{
		//alert(vocales_list.indexOf(cadena[x]));
		if (vocales_list.indexOf(cadena[x]) !== -1)
		{
			//cuenta += 1;
			if ((vocales_list.indexOf(cadena[x]) === 0 || vocales_list.indexOf(cadena[x]) === 1 || vocales_list.indexOf(cadena[x]) === 10 || vocales_list.indexOf(cadena[x]) === 11))
			{
				//alert("A");
				cuentaA += 1;
			}
			if ((vocales_list.indexOf(cadena[x]) === 2 || vocales_list.indexOf(cadena[x]) === 3 || vocales_list.indexOf(cadena[x]) === 12 || vocales_list.indexOf(cadena[x]) === 13))
			{
				cuentaE += 1;
			}
			if ((vocales_list.indexOf(cadena[x]) === 4 || vocales_list.indexOf(cadena[x]) === 5 || vocales_list.indexOf(cadena[x]) === 14 || vocales_list.indexOf(cadena[x]) === 15))
			{
				cuentaI += 1;
			}
			if ((vocales_list.indexOf(cadena[x]) === 6 || vocales_list.indexOf(cadena[x]) === 7 || vocales_list.indexOf(cadena[x]) === 16 || vocales_list.indexOf(cadena[x]) === 17))
			{
				cuentaO += 1;
			}
			if ((vocales_list.indexOf(cadena[x]) === 8 || vocales_list.indexOf(cadena[x]) === 9 || vocales_list.indexOf(cadena[x]) === 18 || vocales_list.indexOf(cadena[x]) === 19))
			{
				cuentaU += 1;
			}
		}
	}
	if (cuentaA>0){
		resultado += " A nº veces : "+cuentaA+" \n";
	}
	if (cuentaE>0){
		resultado += " E nº veces : "+cuentaE+" \n";
	}
	if (cuentaI>0){
		resultado += " I nº veces : "+cuentaI+" \n";
	}
	if (cuentaO>0){
		resultado += " O nº veces : "+cuentaO+" \n";
	}
	if (cuentaU>0){
		resultado += " U nº veces : "+cuentaU+" \n";
	}
		
	alert(resultado);
	return resultado;
}
