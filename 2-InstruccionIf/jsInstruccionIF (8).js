function Mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById('estadoCivil').value;
	
	/*
	if(edad<18 && estadocivil!="Soltero"){
		document.write("Es soltero y no es menor");
	}

	negado no sirve
	*/
	
	
	if(edad>17 && estadoCivil=="Soltero"){
		document.write("es soltero y no es menor");
	}
	

}//FIN DE LA FUNCIÓN