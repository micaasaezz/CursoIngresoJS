function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom; 
	notaRandom = Math.floor((Math.random() * 10) + 1);

	/*
	if(notaRandom==9 !! notaRandom==10){
		alert("EXELENTE");
	}


	if(notaRandom>4){
		alert("APROBÓ");
	}
	else{
		alert("Vamos, la proxima se puede");
	}

	esta mal, si es 9 o 10 da 2 mensajes

	*/

	if(notaRandom>8){
		alert("EXELENTE");
	}
	else{
		if(notaRandom<4){
			alert("Vamos, la proxima se puede");
		}
		else{
			alert("APROBÓ");	
		}


	}

}//FIN DE LA FUNCIÓN