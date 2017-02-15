function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta= true;
	var numero;


	while(respuesta==true){
		numero = prompt("ingrese numero");
		numero = parseInt(numero);
		acumulador = acumulador+numero; // acumulador+=numero
		contador++; //contador = contador+1; 
		respuesta = confirm("Ingresar otro numero?");	
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN