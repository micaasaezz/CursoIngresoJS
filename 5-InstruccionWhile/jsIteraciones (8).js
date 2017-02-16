function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	
	var respuesta=true;

	while(respuesta==true){
		numero = prompt("ingrese numero");
		numero = parseInt(numero);

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