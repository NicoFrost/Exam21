function mostrar(){
	
		for (contador = 0; contador <= 10; contador++){
			
		let origen;
		let cantidadVacunas = 0;
		let costoVuelo;
		let asiaVacun = 0;
		let europaVacun = 0;
		let usaVacun = 0;
		let vacunas = 0;
		let totPagarViajes = 0;
		let totPagarDescuento;
		let descuento = 0;
		
		
		origen = prompt("origen de vuelo").toLowerCase();
		while (!(isNaN(origen)) || !(origen == "asia" || origen == "europa" || origen == "usa")) {
			origen = prompt("origen de vuelo incorrecto vuelva a ingresar").toLowerCase();
			
		}
		//(“Asia”, “Europa”, “USA”)
		cantidadVacunas = parseInt(prompt("cantidad de vacunas ingresadas"));
		while (isNaN(cantidadVacunas) || cantidadVacunas == 0) {
			cantidadVacunas = parseInt(prompt("Cantidad de vacunas diferente de CERO (0)"));
			
		}
		// cantidadVacunas != 0
		costoVuelo = parseInt(prompt("costo del envio en avion (5 millones y 1 millon)"));
		while (isNaN(costoVuelo) || (costoVuelo > 5000000 || costoVuelo < 1000000) ) {
			costoVuelo = parseInt(prompt("cost del envio en avion entre 5 millones y 1 millon"));
		}
		//entre 1 millon y 5 millones
		
		/*
		Informar:
		a- El origen que envió mayor cantidad de vacunas
		b- El promedio de vacunas llegadas de Asia
		c- El total sin descuentos a pagar por los gastos de los viajes*/
		if (origen == "asia") {
			asiaVacun += cantidadVacunas;
		} else if (origen == "europa") {
			europaVacun += cantidadVacunas;
		} else {
			usaVacun += cantidadVacunas;
		}
		vacunas += cantidadVacunas;
		totPagarViajes += costoVuelo;
	}
		
		if (asiaVacun >= europaVacun && asiaVacun >= USAVacun){
			alert("el pais que envio mas vacunas fue Asia");
		} else if ( europaVacun >= asiaVacun && europaVacun >= USAVacun){
			alert("el pais que envio mas vacunas fue Europa");	
		} else{
			alert("el pais que envio mas vacunas fue USA");
		}	
		promedioVacunAsia = vacunas / cantVacunAsia;
		/*Informar si hubo descuento de cuanto fue y el importe final con descuento*/

	if (vacunas > 4000000) {
		descuento = .30;
	} else if (vacunas <= 4000000 && vacunas >= 2000000) {
		descuento = .20;
	} else {
		descuento = 0;
	}
		alert("Asia envio un promedio de " + promedioVacunAsia + "vacunas");
		alert("Total a pagar sin descuentos es de $" + totPagarViajes);
		
		if (descuento != 0) {
			totPagarDescuento = totPagarViajes * descuento;
			alert("hubo un descuento y fue de $" + descuento + "al final pagaremos la suma total de $" + totPagarDescuento);
		} else {
			alert("no hubo un descuento pagaremos la suma total de $" + totPagarViajes);
		}
		

}