/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	suma=numeroUno+numeroDos;

	alert("la suma es "+suma);

	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resta=numeroUno-numeroDos;

	alert("la resta es "+resta);

	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicacion;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	multiplicacion=numeroUno*numeroDos;

	alert("la multiplicacion es "+multiplicacion);

}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var division;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	division=numeroUno/numeroDos;

	alert("la division es "+division);


}
















