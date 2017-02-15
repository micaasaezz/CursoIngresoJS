function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5){
		numero = prompt("ingrese numero");
		numero = parseInt(numero);
		acumulador = acumulador+numero; // acumulador+=numero
		contador++; //contador = contador+1; 	
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN