function Mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");

	numero = parseInt(numero); 
	/*
		paso numero a numero entero, porque lo pedi por prompt, y prompt es para pedir texto
	*/

	while(numero>9 || numero<0){
		numero = prompt("Error, reingrese.");
		numero = parseInt(numero);
	}

	document.getElementById('Numero').value = numero;


}//FIN DE LA FUNCIÓN