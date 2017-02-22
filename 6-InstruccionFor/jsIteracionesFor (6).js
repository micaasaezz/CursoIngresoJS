function Mostrar()
{
	var numero;
	var i;
	var cantidadPar=0;

	numero = prompt("Ingrese número.");
	numero = parseInt(numero);

	for(i=1 ; i<=numero ; i++){
		if(i%2==0){
			document.write(i+"</br>");
			cantidadPar++;
		}

		
	}

	document.write("La cantidad de pares es: "+cantidadPar );

}//FIN DE LA FUNCIÓN