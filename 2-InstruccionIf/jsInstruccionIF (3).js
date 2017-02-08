function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad>=18){

		alert("es mayor de edad");
	}
	else {
		alert("es menor de edad");
	}

	
	/*
	if(edad<18){
	alert("es menor de edad");
	}
	otra forma de resolverlo
	hay que prestar atencion de que se complementen
	*/


}//FIN DE LA FUNCIÓN