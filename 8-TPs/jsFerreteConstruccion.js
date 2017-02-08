/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;

	largoTerreno = document.getElementById('Largo').value;
	anchoTerreno = document.getElementById('Ancho').value;

	parseInt(largoTerreno+anchoTerreno);

	alambre = (((largoTerreno*2)+(anchoTerreno*2))*3);

	alert("la cantidad de alambre que se necesita es "+alambre);

}

function Circulo () 
{
	
	
}

function Materiales () 
{
	
	
}