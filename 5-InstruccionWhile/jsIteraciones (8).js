function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var acumPos=0;
	var acumNeg=1;
	
	var respuesta=true;

	while(respuesta==true){
		numero = prompt("ingrese numero");
		numero = parseInt(numero);
		 
		respuesta = confirm("Ingresar otro numero?");	
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN