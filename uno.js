
function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let seguir;
	let nombreMaxF;
	let edadMaxF;
	let vacunaMaxF;
	let contVacunRusa = 0
	let edadVacunRusa = 0;
	let contVacunAmerica = 0;
	let mayoresVacunAmerica = 0;
	let vacunados = 0;
	let promedioVacunRusa;
	let porcentajeVacunAmerica;
	let dosisS = 0;
	let porcentajeDosisS;
	let contVacunChina = 0;

	do {
		nombre = prompt("Ingrese nombre del vacunado").toLowerCase();
		while(!(isNaN(nombre))){
			nombre = prompt("Error: Ingrese nuevamente nombre del vacunado").toLowerCase();
		}
		edad = parseInt(prompt("ingrese edad (solo se permite desde los 12 en adelante)"));
		while(edad < 12 && !(isNaN(edad))){
			edad = parseInt(prompt("ingrese edad (SOLO DE 12 EN ADELANTE!)"));
		}
		vacuna = prompt("ingrese vacuna a aplicar (rusa, china, americana)").toLowerCase();
		while(!(isNaN(vacuna)) || !(vacuna == "rusa" || vacuna == "china" || vacuna == "americana")) {
			vacuna = prompt("ingrese BIEN la vacuna a aplicar (rusa, china, americana)").toLowerCase();
		}
		dosis = prompt("ingrese que dosis se va a aplicar (p/s)").toLowerCase();
		while (!(isNaN(dosis)) || !(dosis == "p" || dosis == "s")) {
			dosis = prompt("ingrese que dosis se va a aplicar (p/s)").toLowerCase();
		}
		sexo = prompt("ingrese Sexo de la paciente (f/m)").toLowerCase();
		while(!(isNaN(sexo)) || !(sexo == "f" || sexo == "m")){
			sexo = prompt("ingrese Sexo de la paciente SOLO (f/m) Y CON LETRAS").toLowerCase();
		}

		if (vacuna == "rusa") {
			contVacunRusa++;
			edadVacunRusa += edad;
		} else if(vacuna == "americana") {
			contVacunAmerica++;
			if (edad >= 18){
				mayoresVacunAmerica++;
			}
		} else {
			contVacunChina++;
		}

		/*c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
		  d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
		  e- Vacuna menos inoculada
		*/
		console.log(edad);
		console.log(EdadVacunRusa);
		console.log(ContVacunRusa);
		if (sexo == "f" && edad > edadMaxF ) {
			nombreMaxF = nombre;
			vacunaMaxF = vacuna;
			edadMaxF = edad;
		}
		vacunados++;
		if (dosis == "s"){
			dosisS++;
		}
		seguir = prompt("hay mas paciente?");
	} while (seguir == "si");

	promedioVacunRusa = edadVacunRusa / contVacunRusa;
	porcentajeVacunAmerica = mayoresVacunAmerica * 100 / contVacunAmerica; 
	porcentajeDosisS = dosisS * 100 / vacunados;

	Math.round(promedioVacunRusa);
	Math.round(porcentajeVacunAmerica);
	

	alert("Promedio de edad de los que se vacuron " + promedioVacunRusa + "\n Nombre de mujer con mas edad " + nombreMaxF + " la vacuna aplicada fue " + vacunaMaxF + " y es la mayor por una edad de " + edadMaxF + "\n " );
	alert("el porcentaje de gente mayor de edad con la vacuna americana es %" + porcentajeVacunAmerica + "\n porcentaje de gente con 2 dosis es %" + porcentajeDosisS);
	if (contVacunRusa < contVacunChina && contVacunRusa < ContVacua) {
		alert("la que menos dosis se dieron fue la Rusa");

	} else if (contVacunAmerica < contVacunChina && contVacunAmerica < contVacunRusa) {
		alert("la que menos dosis se dieron fue la Americana");
	} else {
		alert("la que menos dosis se dieron fue la China")
	}
}
