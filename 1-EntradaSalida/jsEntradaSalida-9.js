/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo;

	sueldo=document.getElementById('sueldo').value; // toma el dato por id

	sueldo=parseInt(sueldo);

	resultado=sueldo*1.1; //multiplicar por 1.1 es hacer el 10%

	document.getElementById('resultado').value=resultado; // da/muestra el dato por su id

}
