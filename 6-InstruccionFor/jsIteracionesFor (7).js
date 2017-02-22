function Mostrar()
{
	var numero;
	var i;
	var cantidadDiv=0;

	

	numero = prompt("Ingrese número.");
	numero = parseInt(numero);

	for(i=1 ; i<=numero ; i++){
		if(numero%i==0){
			document.write(i+"</br>");
			cantidadDiv++;
		}
	}

	document.write("La cantidad de divisores encontrados es "+cantidadDiv);



}//FIN DE LA FUNCIÓN