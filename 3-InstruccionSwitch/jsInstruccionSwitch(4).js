function Mostrar()
{
	//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	//alert (mesDelAño);


	switch (mesDelAño)
	{
		case "Febrero":
			alert("Tiene 28 dias");
			break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Tiene 31 dias");
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias");
			break;

	}
	

	
	/*
 
 	switch(mesDelAño)
 	{
 			case "Febrero":
 			alert("Tiene 28 días");
 			break;

 			default:
 			if(mesDelAño == "Abril" || mesDelAño == "Junio" || mesDelAño == "Septiembre" || mesDelAño == "Noviembre")
 				{alert("Tiene 30 dias");}
 			else{ alert(" Tiene 31 dias");}
 			break;


 	}

	*/


}//FIN DE LA FUNCIÓN