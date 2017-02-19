/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	numeroRandom = Math.floor((Math.random() * 3) + 1);
	//alert(numeroRandom);
	console.log(numeroRandom);

}//FIN DE LA FUNCIÓN
function piedra()
{ 
	switch(numeroRandom){
		case 1:
			alert("Empate!");
			break;
		case 2:
			alert("Usted perdió!");
			break;
		case 3:
			alert("Usted ganó!");
			break;
	}
	

}//FIN DE LA FUNCIÓN
function papel()
{
	switch(numeroRandom){
		case 1:
			alert("Usted ganó!");
			break;
		case 2:
			alert("Empate!");
			break;
		case 3:
			alert("Usted perdió!");
			break;
	}
	
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(numeroRandom){
		case 1:
			alert("Usted perdió!");
			break;
		case 2:
			alert("Usted ganó!");
			break;
		case 3:
			alert("Empate!");
			break;
	}

}//FIN DE LA FUNCIÓN