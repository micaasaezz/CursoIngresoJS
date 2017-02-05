/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;

	importe=document.getElementById('importe').value;

	importe=parseInt(importe);

	Descuento=importe*25/100;
    Descuento=parseInt(Descuento);

	resultado=importe-Descuento;

	alert(resultado);


}
