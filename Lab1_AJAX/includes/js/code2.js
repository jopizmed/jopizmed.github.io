/*LABORATORIO 01_PARTE 02: CÓDIGO AJAX*/

String.prototype.transformaCaracteresEspeciales = function() {
		return unescape(escape(this).
            replace(/%0A/g, '<br/>').
            replace(/%3C/g, '&lt;').
            replace(/%3E/g, '&gt;'));
	}
	
	var estadosPosibles = ['No inicializado', 'Cargando', 'Cargado', 'Interactivo', 'Completado'];
  
	var tiempoInicial = 0;
  
	window.onload = function() {
		// Cargar en el input text la URL de la página
		var recurso = document.getElementById('recurso');
		recurso.value = location.href;

		// Cargar el recurso solicitado cuando se pulse el botón MOSTRAR CONTENIDOS
		document.getElementById('enviar').onclick = cargaContenido;
	}
	
	function cargaContenido() {
		// Borrar datos anteriores
		document.getElementById('contenidos').innerHTML = "";
		document.getElementById('estados').innerHTML = "";

		// Instanciar objeto XMLHttpRequest
		if(window.XMLHttpRequest) {
		peticion = new XMLHttpRequest();
		}
		else {
		peticion = new ActiveXObject("Microsoft.XMLHTTP");
		}

		// Preparar función de respuesta
		peticion.onreadystatechange = muestraContenido;

		// Realizar petición
		tiempoInicial = new Date();
		
		var recurso = document.getElementById('recurso').value;
		
		peticion.open('GET', recurso+'?nocache='+Math.random(), true);
		peticion.send(null);
	}
	
	function muestraContenido() {
		var tiempoFinal = new Date();
		var milisegundos = tiempoFinal - tiempoInicial;

		var estados = document.getElementById('estados');
		estados.innerHTML += "[" + milisegundos + " mseg.] " + estadosPosibles[peticion.readyState] + "<br/>";

		if(peticion.readyState == 4) {
			if(peticion.status == 200) {
				var contenidos = document.getElementById('contenidos');
				contenidos.innerHTML = peticion.responseText.transformaCaracteresEspeciales();
			}
			muestraCabeceras();
			muestraCodigoEstado();
		}
	}
	
	function muestraCabeceras() {
		var cabeceras = document.getElementById('cabeceras');
		cabeceras.innerHTML = peticion.getAllResponseHeaders().transformaCaracteresEspeciales();
	}
	
	function muestraCodigoEstado() {
		var codigo = document.getElementById('codigo');
		codigo.innerHTML = peticion.status + "<br/>" + peticion.statusText;
	}