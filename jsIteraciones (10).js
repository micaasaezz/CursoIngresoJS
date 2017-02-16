function Mostrar()
{

	var contador=0;
	//declarar contadores y variables
	var numero;
	var sumaNegativos;
	var sumaPositivos;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
	
	var respuesta="si";

	while(respuesta == "si")
	{

		numero = prompt("ingrese numero");
		numero = parseInt(numero);
		
		if(numero<0){
			sumaNegativos = sumaNegativos+numero;
			acumuladorNegativos++;
		}
		else{
			if(numero>0)
			{
				sumaPositivos = sumaPositivos+numero;
				acumuladorPositivos++;
			}
			else
			{
				contCero++;
			}
		}
		if(numero%2==0){

		} //num par
		else{}//num impar

		
	
	

		respuesta = prompt("Ingresar otro numero? si/no");
	
	}

	promedio=????

 	document.write("hola");


}//FIN DE LA FUNCIÓN