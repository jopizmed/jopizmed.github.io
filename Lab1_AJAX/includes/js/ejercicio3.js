function vocales(cadena) {
	var resultado = "Las vocales que aparecen son : \n";
	var vocales_list = 'aáeéiíoóuúAÁEÉIÍOÓUÚ';
	//var cuenta = 0;
	var vocalA = false;
	var vocalE = false;
	var vocalI = false;
	var vocalO = false;
	var vocalU = false;
	for(var x = 0; x < cadena.length ; x++)
	{
		//alert(vocales_list.indexOf(cadena[x]));
		if (vocales_list.indexOf(cadena[x]) !== -1)
		{
			//cuenta += 1;
			if ((vocalA === false) && (vocales_list.indexOf(cadena[x]) === 0 || vocales_list.indexOf(cadena[x]) === 1 || vocales_list.indexOf(cadena[x]) === 10 || vocales_list.indexOf(cadena[x]) === 11))
			{
				//alert("A");
				vocalA = true;
				resultado += " A ";
				//cuentaA += 1;
			}
			if ((vocalE === false) && (vocales_list.indexOf(cadena[x]) === 2 || vocales_list.indexOf(cadena[x]) === 3 || vocales_list.indexOf(cadena[x]) === 12 || vocales_list.indexOf(cadena[x]) === 13))
			{
				//alert("E");
				vocalE = true;
				resultado += " E ";
				//cuentaE += 1;
			}
			if ((vocalI === false) && (vocales_list.indexOf(cadena[x]) === 4 || vocales_list.indexOf(cadena[x]) === 5 || vocales_list.indexOf(cadena[x]) === 14 || vocales_list.indexOf(cadena[x]) === 15))
			{
				//alert("I");
				vocalI = true;
				resultado += " I ";
				//cuentaI += 1;
			}
			if ((vocalO === false) && (vocales_list.indexOf(cadena[x]) === 6 || vocales_list.indexOf(cadena[x]) === 7 || vocales_list.indexOf(cadena[x]) === 16 || vocales_list.indexOf(cadena[x]) === 17))
			{
				//alert("O");
				vocalO = true;
				resultado += " O ";
				//cuentaO += 1;
			}
			if ((vocalU === false) && (vocales_list.indexOf(cadena[x]) === 8 || vocales_list.indexOf(cadena[x]) === 9 || vocales_list.indexOf(cadena[x]) === 18 || vocales_list.indexOf(cadena[x]) === 19))
			{
				//alert("U");
				vocalU = true;
				resultado += " U ";
				//cuentaU += 1;
			}
		}
	}
	alert(resultado);
	return resultado;
}
