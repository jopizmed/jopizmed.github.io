function loadDoc(url, cFunction) {
	var xhttp;
	xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		myFunction(this);
		}
	};
	xhttp.open("GET", url, true);
	add(xhttp);
	function add(request) {
		request.setRequestHeader("Access-Control-Allow-Origin", "*");
		request.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");
	}
	xhttp.send();
}

function myFunction(xhttp) {
	document.getElementById("demo").innerHTML =
	xhttp.responseText;
}