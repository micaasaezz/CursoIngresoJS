/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{ //A.
 	var cantidadLamparitas;
 	var precioLamparitas = 35;
 	var marcaLamparitas = document.getElementById('Marca').value;

 	cantidadLamparitas = document.getElementById('Cantidad').value;
 	cantidadLamparitas = parseInt(cantidadLamparitas);
	
	precio = cantidadLamparitas*precioLamparitas;

	//A
	if(cantidadLamparitas>=6){
 		precio = precio*0.50;

 		document.getElementById('precioDescuento').value = precio;
 	}

 	switch(cantidadLamparitas){
		
		//B
 		case "5": 
 			if(marcaLamparitas == "ArgentinaLuz"){
 				precio = precio*0.6;
 			}
 			else{
 				precio = precio*0.7;
 			}

 			break;

 		//C
 		case "4":
 			if(marcaLamparitas == "ArgentinaLuz" ||  marcaLamparitas == "FelipeLamparas"){
 				precio = precio*0.75;
 			}
 			else{
 				precio = precio*0.8;
 			}

 			break;

 		//D
 		case "3":
 			if(marcaLamparitas == "ArgentinaLuz"){
 				precio = precio*0.85;
 			}
 			else{
 				if(marcaLamparitas == "FelipeLamparas"){
 					precio = precio*0.9;
 				}
 				else{
 					precio = precio*0.95;
 				}
 			}

 			break;


 	}

 	//E
 	if(precio>"120"){
 		precio = precio*1.1;
 		document.getElementById("precioDescuento").value = precio;
 		impuesto = precio*0.1;
 		alert("IIBB Usted pagó "+impuesto);
 	}
 	else{
 		document.getElementById("precioDescuento").value = precio;
 	}









 	/*
 	//A
 	if(cantidadLamparitas>=6){
 		precio = precio*0.50;

 		document.getElementById('precioDescuento').value = precio;
 	}


 	//B
 	if(cantidadLamparitas == 5 && marcaLamparitas == "ArgentinaLuz"){
 		precio = precio*0.40;

 		document.getElementById('precioDescuento').value = precio;
 	}
 	else{ precio = precio*0.30;
 		document.getElementById('precioDescuento').value = precio;
 	}

 	//C
 	if(cantidadLamparitas == 4 && marcaLamparitas == "ArgentinaLuz" !! marcaLamparitas == "FelipeLamparas"){
 		precio = precio*0.25; 
 		document.getElementById('precioDescuento').value = precio;
 	}
 	else{precio = precio*0.20;
 		document.getElementById('precioDescuento').value = precio;
 	}

 	//D
 	if(cantidadLamparitas == 3 && marcaLamparitas == "ArgentinaLuz"){
 		precio = precio*0.15;
 		document.getElementById('precioDescuento').value = precio;
 	}
 	else{
 		if(marcaLamparitas == "FelipeLamparas"){
 			precio = precio*0.10;
 		}
 		else{ 
 			precio = precio*0.05;
 		}
 	}

 	//E
 	if(precio>"120"){
 		precio = precio*1.1;
 		document.getElementById("precioDescuento").value = precio;
 		alert("IIBB Usted pagó "+precio);
 	}
 	else{
 		document.getElementById("precioDescuento").value = precio;
 	}
*/
}

