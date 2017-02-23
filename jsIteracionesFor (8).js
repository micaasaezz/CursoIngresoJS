function Mostrar()
{
	/*
	var numero;
	var i;
	var cantidadDiv=0;

	numero = prompt("Ingrese número.");
	numero = parseInt(numero);

	for(i=1 ; i<=numero ; i++){
		if(numero%i==0){
			cantidadDiv++;
		}
	}

	if(cantidadDiv>2){
		alert("El número es no primo.");
	}
	else{
		alert("El número es primo.");
	}
	*/


	/*
	se ingresara los datos de los alumnos del curso de ingreso,
	a partir de estos datos deberemos informar lo siguiente:
	1 la mejor nota.
	2 promedio de notas.
	3 necesito saber la cantidad de mujeres aprobadas mayores a 25 años
	4 el sexo y el nombre de la ultima persona que se saco 10.
	5 la cantidad de hombres desaprobados.
	6 la cantidad de mujeres aprobadas.
	7 el promedio de nota de la mujeres.
	8 el promedio de notas de los hombres mayores a 30.
	9 que sexo dasaprobo mas.
	10 cuantas personas menores a 30 años desaprobaron el examen.

	los datos de los alumnos son 
	nombre
	edad
	nota
	sexo

	*/

	var nombre;
	var edad;
	var nota;
	var sexo;

	var respuesta = "si";
	var contador=0;
	var notaMax;
	var sumaNotas=0;
	var promedio;
	var cantMujeresAprobadasMayoresDeVeinticinco=0;
	var sexoDiez;
	var nombreDiez;
	var cantHombresDesaprobados=0;
	var cantMujeresDesaprobadas=0;
	var cantMujeresAprobadas=0;

	var cantidadMujeres=0;
	var acumuladorNotasMujeres=0;
	var promedioNotaMujeres;

	var acumuladorNotasHombresMayoresATreinta=0;
	var cantHombresMayoresATreinta=0;
	var promedioNotasHombresMayoresATreinta;

	var sexoQueDesaproboMas;
	var cantPersonasMenores30Desaprobadas=0;


	while(respuesta == "si")
	{
		nombre = prompt("Ingrese nombre.");



		edad = prompt("Ingrese edad.");
		edad = parseInt(edad);
		while(edad>100 || edad<16){
			edad = prompt("Ingrese edad válida.");
			edad = parseInt(edad);
		}
		



		nota = prompt("Ingrese nota.");
		nota = parseInt(nota);

		while(nota<0 || nota>10){
			nota = prompt("Ingrese nota.");
			nota = parseInt(nota);
		}

		if(contador==0){
			notaMax = nota;
		}
		else{
			if(nota>notaMax){
				notaMax = nota;
			}
		}

		sumaNotas++;








		sexo = prompt("Ingrese sexo 'f' para femenino o 'm' para masculino.");
		while(sexo!="f" && sexo!="m"){
			sexo = prompt("Ingrese sexo válido.");
		}	
		if(sexo=="f"){
			cantidadMujeres++;
		}
		


		if(edad>=25)
		{
			if(sexo=="f" && nota>3)
			{
				cantMujeresAprobadasMayoresDeVeinticinco++;
			}
		}
		


		if(nota==10 )
		{
			sexoDiez = sexo;
			nombreDiez = nombre;
		}



		if(nota<3 && sexo=="m")
		{
			cantHombresDesaprobados++;
		}


		if(nota>3 && sexo=="f"){
			cantMujeresAprobadas++;
		}

		
		if(nota<3 && sexo=="m")
		{
			cantHombresDesaprobados++;
		}




		if(sexo=="f"){
			acumuladorNotasMujeres = acumuladorNotasMujeres+nota;
		}

		promedioNotaMujeres = acumuladorNotasMujeres/cantidadMujeres;




		if(sexo=="m" && edad>29){
			cantHombresMayoresATreinta++;
			acumuladorNotasHombresMayoresATreinta = acumuladorNotasHombresMayoresATreinta+nota;
		}

		promedioNotasHombresMayoresATreinta = acumuladorNotasHombresMayoresATreinta/cantHombresMayoresATreinta;





		if(cantHombresDesaprobados>cantMujeresDesaprobadas){
			sexoQueDesaproboMas = "Hombres";
		}
		else{
			if(cantMujeresDesaprobadas>cantHombresDesaprobados){
				sexoQueDesaproboMas = "Mujeres";
			}
		}


		if(edad<31 && nota<4){
			cantPersonasMenores30Desaprobadas++;
		}









		contador++;
		respuesta = prompt("Quiere seguir? si/no");
	}


	



	promedio = sumaNotas/contador;



}//FIN DE LA FUNCIÓN