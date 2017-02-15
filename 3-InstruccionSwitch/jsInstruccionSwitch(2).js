function Mostrar()
{
  
	var mesDelAño = document.getElementById('mes').value;

	//alert (mesDelAño);

	switch (mesDelAño) 
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "junio":
			alert("Falta para el invierno");
			break;

		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!");
			break;


	}

/*
	
		if(mesDelAño == "Enero" || mesDelAño == "Febrero" || mesDelAño == "Marzo" || mesDelAño == "Abril" || mesDelAño == "Mayo" || mesDelAño == "Junio")
		{alert("falat p el frio");}
		else{
			if(mesDelAño == "Julio" || mesDelAño == "Agosto")
				{ alert("Abrogate que hace frio"); } 
			else{ alert("ya pasó el frio, ahora calor"); }
			} 

*/
	

}//FIN DE LA FUNCIÓN