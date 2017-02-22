function Mostrar()
{

	var contador=0;
	//declarar contadores y variables
	var numero;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
	var contCero=0;
	var contNumPares=0;
	//var contNumImpares=0;
	
	var respuesta="si";

	while(respuesta == "si")
	{

		numero = prompt("ingrese numero");
		numero = parseInt(numero);
		
		if(numero<0)
		{
			sumaNegativos = sumaNegativos+numero;
			acumuladorNegativos++;
		}
		else
		{
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

		if(numero%2==0 && numero!=0){
			contNumPares++;
		} //num par

		/*
		else{
			contNumImpares++;
		}//num impar
		*/



		respuesta = prompt("Ingresar otro numero? si/no");
	
	}

	promedioPos = sumaPositivos/acumuladorPositivos;
	promedioNeg = sumaNegativos/acumuladorNegativos;

	diferencia = sumaPositivos - sumaNegativos;

 	document.write("La suma de los negativos es "+sumaNegativos+".<br /> La suma de los positivos es "+sumaPositivos+".<br /> La cantidad de positivos es "+acumuladorPositivos+". <br />La cantidad de negativos es "+acumuladorNegativos+". <br />La cantidad de ceros es "+contCero+".<br /> La cantidad de numeros pares es "+contNumPares+". <br />El promedio de numeros positivos es "+promedioPos+".<br /> El promedio de numeros negativos es "+promedioNeg+".<br /> La diferencia entre numeros positivos y numeros negativos es "+diferencia+".");


	// <br /> es el salto de linea en el html

}//FIN DE LA FUNCIÓN