function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta=true;

	while(respuesta==true){
		numero = prompt("ingrese numero entre -10 y 10");
		numero = parseInt(numero);

		while(numero<-10 || numero>10) //validar numero SIEMPRE VA CON WHILE
		{
			numero = prompt("error, reingrese numero");
			numero = parseInt(numero);
		}

		if(numero<0){
			negativo = negativo*numero;
		}
		else{
			positivo = positivo+numero;
		}
		 
		respuesta = confirm("Ingresar otro numero?");	
		
	}



	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN