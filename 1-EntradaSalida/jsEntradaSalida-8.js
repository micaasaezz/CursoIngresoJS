/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resultado;


	dividendo=document.getElementById('numeroDividendo').value;
	divisor=document.getElementById('numeroDivisor').value;

	parseInt(dividendo+divisor);

	resultado=dividendo%divisor;


	/*
	resultado=10%2;
	alert(resultado);
	resultado=2%10;
	alert(resultado);
	*/
	
	alert("el resto es "+resultado);

	
}

