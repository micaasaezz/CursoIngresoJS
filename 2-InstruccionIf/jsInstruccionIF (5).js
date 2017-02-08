function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if(!(edad>=13 && edad<=17)){ // ! sirve para negar, es lo del 4 que si eran adolescentes negado.
		alert("no es adolescente");
	}

	/*
	if(edad<13 || edad>17){
		alert("no es adolescente");
	}
	*/
}//FIN DE LA FUNCIÓN