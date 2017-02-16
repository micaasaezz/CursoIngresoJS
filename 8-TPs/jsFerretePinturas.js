/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaFahrenheit;
	var temperaturaCentigrados;

	temperaturaFahrenheit = document.getElementById('Temperatura');
	temperaturaFahrenheit = parseInt(temperaturaFahrenheit);

	//falta pasar la temp 

	alert(temperaturaFahrenheit+" fahrenheit son "+temperaturaCentigrados+" centigrados");
	
}

function CentigradosFahrenheit () 
{
	var temperaturaCentigrados;
	var temperaturaFarenheit;

	temperaturaCentigrados = document.getElementById("Temperatura").value;
	temperaturaCentigrados = parseInt(temperaturaCentigrados);

	//falta pasar la temp

	alert(temperaturaCentigrados+" centigrados son "+ temperaturaFarenheit+" farenheit");

}
