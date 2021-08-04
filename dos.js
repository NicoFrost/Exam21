function mostrar()
{
    let nacionalidad;
	let edad;
	let cepa;
	let resultado;
    let seguir;
    let positivos = 0;
    let negativos = 0;
    let viajeros = 0;
    let cepaDelta = 0;
    let cepaAlpha = 0;
    let cepaBeta = 0;
    let contagiadosArg = 0;
    let edadMaxExtraño = 0;


    do {
		nacionalidad = prompt("Ingrese nacionalidad del Viajero").toLowerCase();
		while(isNaN(nacionalidad) && !(nacionalidad == "argentina" || nacionalidad == "extranjero") ){
            nacionalidad = prompt("Ingrese nacionalidad del viajero").toLowerCase();
		}
		edad = parseInt(prompt("ingrese edad (solo se permite desde los 18 hasta los 65)"));
		while(!(isNaN(edad)) && (edad < 18 || edad > 65)){
			edad = parseInt(prompt("ingrese edad (SOLO DESDE LOS 18 HASTA LOS 65!)"));
		}
        resultado = prompt("ingrese si el resultado fue positivo o negativo").toLowerCase();
        while (!(isNaN(resultado)) || !(resultado == "positivo" || resultado == "negativo")) {
            resultado = prompt("ingrese si el resultado fue positivo o negativo").toLowerCase();
        }
        if (resultado == "positivo") {
            cepa = prompt("ingrese cepa a declarar (alpha, delta, beta o si no se detecto COVID-19 = ninguna)").toLowerCase();
            while(!(isNaN(cepa)) || !(cepa == "delta" || cepa == "alpha" || cepa == "beta")) {
                cepa = prompt("ingrese BIEN la cepa a declarar (alpha, delta, beta o si no se detecto COVID-19 = ninguna)").toLowerCase();
            }
        } else {
            cepa = "ninguna"
            alert("se ha pre-seleccionado la cepa ninguna")
        }
 /*
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa más encontrada
d- Edad del mayor extranjero contagiado
e- Cantidad de personas argentinas contagiadas con la delta*/

        if (resultado == "positivo") {
            positivos++;
        } else {
            negativos++;
        }
        
        if (cepa == "delta") {
            if (nacionalidad == "argentina"){
                contagiadosArg++;
            }
            cepaDelta++;
        } else if (cepa == "alpha") {
            cepaAlpha++;
        } else {
            cepaBeta++;
        }

        if (nacionalidad == "extranjero" && edad > edadMaxExtraño) {
            edadMaxExtraño = edad;
        }
        viajeros++;
        seguir = prompt("hay mas viajeros?");
	} while (seguir == "si");

    if (cepaAlpha > cepaDelta && cepaAlpha > cepaBeta){
        al
    } else if (cepaDelta > cepaAlpha && cepaDelta > cepaBeta){

    } else{

    }

}
