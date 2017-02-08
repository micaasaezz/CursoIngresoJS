function Mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById('estadoCivil').value;

	if(edad<18 && estadoCivil!="Soltero"){
		document.write("Es muy pequeño para NO ser soltero"); 
		//parecido a alert, misma funcion
	}
	


}//FIN DE LA FUNCIÓN