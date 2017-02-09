function Mostrar()
{
	//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	//alert (mesDelAño);

	switch (mesDelAño) {

		case "Febrero":
			alert("Este mes no tiene más de 29 días.");
			break;

		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		default:
		alert("Este mes tiene 30 o mas dias");
		break;



		
	}
	
	/*if(mesDelAño == "Febrero"){
			alert("Este mes no tiene más de 29 días.");
		}
		else{
			alert("Este mes tiene 30 o más días");
		}*/


}//FIN DE LA FUNCIÓN