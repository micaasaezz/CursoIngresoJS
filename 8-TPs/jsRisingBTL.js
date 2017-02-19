/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldoBruto;
 	var numLegajo;
 	var nacionalidad;


 	edad = prompt("Ingrese edad entre 18 y 90 años.");
 	edad = parseInt(edad);
 	while(edad<18 || edad>90){
 		edad = prompt("Eror, ingrese edad válida.");
 		edad = parseInt(edad);
 	}
 	document.getElementById('Edad').value = edad;



 	sexo = prompt("Ingrese 'f' para femenino o 'm' para masculino.")
 	while(sexo!="f" && sexo!="m"){ 
		sexo = prompt("Error, reingrese un sexo válido.");
	}

	switch(sexo){
		case "f":
			sexo = "Femenino";
			break;
		case "m":
			sexo = "Masculino";
			break;
	}
	/*if(sexo == "f"){
		sexo = "Femenino";
	}
	if(sexo == "m"){
		sexo = "Masculino";
	}*/
	document.getElementById('Sexo').value = sexo;


	estadoCivil = prompt("Ingrese 1 si es soltero, 2 si es casado, 3 si es divorciado o 4 si es viudo.");
	//estadoCivil = parseInt(estadoCivil);
	while(estadoCivil!=1 && estadoCivil!=2 && estadoCivil!=3 && estadoCivil!=4){
		estadoCivil = prompt("Ingrese estado civil válido.");
	}

	switch(estadoCivil){
		case "1":
			estadoCivil = "Soltero";
			break;
		case "2":
			estadoCivil = "Casado";
			break;
		case "3":
			estadoCivil = "Divorciado";
			break;
		case "4":
			estadoCivil = "Viudo";
			break;
	}

	/*if(estadoCivil == 1){
		estadoCivil = "Soltero";
	}
	if(estadoCivil == 2){
		estadoCivil = "Casado";
	}
	if(estadoCivil == 3){
		estadoCivil = "Divorciado";
	}
	if(estadoCivil == 4){
		estadoCivil = "Viudo";
	}*/

	document.getElementById('EstadoCivil').value = estadoCivil;


	sueldoBruto = prompt("Ingrese su Sueldo bruto, no menor a $8000.");
	sueldoBruto = parseInt(sueldoBruto);
	while(sueldoBruto<8000){
		sueldoBruto = prompt("Error, ingrese sueldo mayor a $8000.");
		sueldoBruto = parseInt(sueldoBruto);
	}
	document.getElementById('Sueldo').value = sueldoBruto;



	numLegajo = prompt("Ingrese su numero de legajo, sin ceros a la izquierda.");
	numLegajo = parseInt(numLegajo);
	while(numLegajo<1000 || numLegajo>9999){
		numLegajo = prompt("Error, reingrese un número de legajo válido.");
		numLegajo = parseInt(numLegajo);
	}
	document.getElementById('Legajo').value = numLegajo;


	nacionalidad = prompt("Ingrese 'a' si es argentino, 'e' si es extranjero o 'n' si está nacionalizado.");
	while(nacionalidad!="a" && nacionalidad!="e" && nacionalidad!="n"){
		nacionalidad = prompt("Error, ingrese una nacionalidad válida.");
	}

	switch(nacionalidad){
		case "a":
			nacionalidad = "Argentino";
			break;
		case "e":
			nacionalidad = "Extranjero";
			break;
		case "n":
			nacionalidad = "Nacionalizado";
			break;
	}

	document.getElementById('Nacionalidad').value = nacionalidad;



}
