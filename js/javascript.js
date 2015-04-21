function definirEstructura() {
	arreglo = new Array();
	arreglo.push({
		"nombre": "Genesis",
		"apellido": "Reyes",
		"cedula": "23592193",
		"correo": "genesis@gmail.com"
	});
	arreglo.push({
		"nombre": "Lilo",
		"apellido": "Reyes",
		"cedula": "3423545",
		"correo": "lilolu@gmail.com"
	});
	arreglo.push({
		"nombre": "Toby",
		"apellido": "Cacri",
		"cedula": "43435",
		"correo": "tobito@gmail.com"
	});
	arreglo.push({
		"nombre": "Nora",
		"apellido": "Torres",
		"cedula": "654645",
		"correo": "norita@gmail.com"
	});
	return arreglo;
}

tabla = definirEstructura();

console.log(tabla);
function genera_tabla() {
 
  var body = document.getElementsByTagName("body")[0];
 

  var tabla = document.getElementsByTagName("table")[0];
  var tblBody = document.createElement("tbody"); 
  var arreglo = definirEstructura();

  for (var i = 0; i < arreglo.length; i++) {
    var hilera = document.createElement("tr");
 
    for (key in arreglo[i]) {
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(arreglo[i][key]);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
 
    tblBody.appendChild(hilera);
  }
 
  
  tabla.appendChild(tblBody);

  body.appendChild(tabla);
 
  tabla.setAttribute("border", "2");
}