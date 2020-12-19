// Se quitan los caracteres especiales
String.prototype.transformaCaracteresEspeciales = function() {
		return unescape(escape(this).
            replace(/%0A/g, '<br/>').
            replace(/%3C/g, '&lt;').
            replace(/%3E/g, '&gt;'));
	}
	var states = ['No inicializado', 'Cargando', 'Cargado', 'Interactivo', 'Completado'];
	var initTime = 0;
  
	window.onload = function() {
		// Cargar la URL de la página en el campo Text
		var recurso = document.getElementById('recurso');
		recurso.value = location.href;

		// Cargar el recurso solicitado cuando se haga 'clic' en el botón
		document.getElementById('enviar').onclick = loadContent;
	}
	
	function loadContent() {
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
		peticion.onreadystatechange = showContent;

		// Realizar petición
		initTime = new Date();
		
		var recurso = document.getElementById('recurso').value;
		
		peticion.open('GET', recurso+'?nocache='+Math.random(), true);
		peticion.send(null);
	}
	
	function showContent() {
		var finalTime = new Date();
		var milisegundos = finalTime - initTime;

		var estados = document.getElementById('estados');
		estados.innerHTML += "[" + milisegundos + " mseg.] " + states[peticion.readyState] + "<br/>";

		if(peticion.readyState == 4) {
			if(peticion.status == 200) {
				var contenidos = document.getElementById('contenidos');
				contenidos.innerHTML = peticion.responseText.transformaCaracteresEspeciales();
			}
			showHeads();
			showStateCod();
		}
	}
	
	function showHeads() {
		var cabeceras = document.getElementById('cabeceras');
		cabeceras.innerHTML = peticion.getAllResponseHeaders().transformaCaracteresEspeciales();
	}
	
	function showStateCod() {
		var codigo = document.getElementById('codigo');
		codigo.innerHTML = peticion.status + "<br/>" + peticion.statusText;
	}