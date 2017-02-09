/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	
	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;

	preciouno=parseInt(preciouno);
	preciodos=parseInt(preciodos);
	preciotres=parseInt(preciotres);

	suma=preciouno+preciodos+preciotres;

	alert(suma);

}

function Promedio () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	
	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;

	preciouno=parseInt(preciouno);
	preciodos=parseInt(preciodos);
	preciotres=parseInt(preciotres);

	suma=preciouno+preciodos+preciotres;
	promedio=suma/3;

	alert(promedio);

}
function PrecioFinal () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	
	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;

	preciouno=parseInt(preciouno);
	preciodos=parseInt(preciodos);
	preciotres=parseInt(preciotres);	

	suma=preciouno+preciodos+preciotres;
	
	suma = parseInt(suma);

	precioFinal = suma*1.21;

	alert(precioFinal);

	

}