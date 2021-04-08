//Esta función contiene todo el codigo para identificar la cadena e identificar cada caractrer 
function lexico() {
	//Se obtiene la cadena escrita en en input
	var cadena = document.getElementById('cadena').value;
	var lex = document.getElementById('lex');
	//Se crea un array con la cantidad de caracteres en la cadena
	var array = cadena.split("",100);
	//var array = cadena.split(/\s+/);
	if (cadena == "//") {
	 	lex.innerHTML = lex.innerHTML + " :Comentario\n";
		}

		//Se realiza un for para rrecorrer el array 
		for (var i in array){
		//si se encuentra algun caracter de la a - z la va a imprimir como constante
		if (/^[a-z]$/.test(array[i])){
			lex.innerHTML = lex.innerHTML +i+"\t" +array[i] + "\tConstante\n";
		//si se encuentra algun caracter de = se va a imprimir como igual
		}else if (/^[=]$/.test(array[i])){
			lex.innerHTML = lex.innerHTML +i+"\t"+ array[i] + "\tIgual\n";
		//si se encuentra algun caracter de * se va a imprimir como Multiplicación
		}else if (/^[*]$/.test(array[i])){
			lex.innerHTML = lex.innerHTML +i+"\t"+ array[i] + "\tMultiplicación\n";
		//si se encuentra algun caracter de () se va a imprimir como Parentesis
		}else if (/^[()]$/.test(array[i])){
			lex.innerHTML = lex.innerHTML +i+"\t"+ array[i] + "\tParéntesis\n";
		//si se encuentra algun caracter de {} se va a imprimir como Llaves
		}else if (/^[{}]$/.test(array[i])){
			lex.innerHTML = lex.innerHTML +i+"\t"+ array[i] + "\tLlave\n";
		//si se encuentra algun caracter de 1-9 o 0-9 se va a imprimir como número
		} else if (/^[1-9]|[0-9]$/.test(array[i])){
			lex.innerHTML = lex.innerHTML +i+"\t"+ array[i] + "\tNúmero\n";
		//si se encuentra algun caracter 0-1 se va a imprimir como binario
		} else if (/^[bin]|[0-1]$/.test(array[i])){
			lex.innerHTML = lex.innerHTML +i+"\t"+ array[i] + "\tBinario\n";
		//si se encuentra algun caracter de + se va a imprimir como suma
		}else if (/^[+]$/.test(array[i])){
			lex.innerHTML = lex.innerHTML +i+"\t"+ array[i] + "\tSuma\n";
		//si se encuentra algun caracter de - se va a imprimir como resta
		}else if (/^[-]$/.test(array[i])){
			lex.innerHTML = lex.innerHTML +i+"\t"+ array[i] + "\tResta\n";
		//si se encuentra algun caracter / se va a imprimir como divición
		}else if (/^[/]$/.test(array[i])){
			lex.innerHTML = lex.innerHTML +i+"\t"+ array[i] + "\tDivisión\n";
		}else if (/^[;]$/.test(array[i])) {
			lex.innerHTML = lex.innerHTML +i+"\t"+ array[i] + "\tPunto y coma\n";
		}
	}
}
	
function semantico(){
	var cadena = document.getElementById('cadena').value;
	var semant = document.getElementById('semant');
	//Se crea un array con la cantidad de caracteres en la cadena
	var array = cadena.split("",100);
		for (var i in array){
		//si se encuentra algun caracter de () se va a imprimir como Parentesis
		if (/^[()]$/.test(array[i])){
			semant.innerHTML = semant.innerHTML + array[i] + " :Cadena correcta\n";
		//si se encuentra algun caracter de {} se va a imprimir como Llaves
		}else if (/^[{}]$/.test(array[i])){
			semant.innerHTML = semant.innerHTML + array[i] + " :Cadena correcta\n";
		}else{
			semant.innerHTML = semant.innerHTML + " La cadena no es correcta\n";
		}
	}
}

function sintactico(){
	var cadena = document.getElementById('cadena').value;
	var sintact = document.getElementById('sintact');
	//Se crea un array con la cantidad de caracteres en la cadena
	if (cadena=" ") {
		sintact.innerHTML = sintact.innerHTML + "La cadena es correcta\n";
	}else {
		sintact.innerHTML = sintact.innerHTML + "La cadena no es correcta\n";
	}
	
}
function limpiar1(){
	var lex1 = document.getElementById('lex');
       lex1.innerHTML = "";
}

function limpiar2(){
	var semant = document.getElementById('semant');
       semant.innerHTML = "";
}

function limpiar3(){
	var sintact = document.getElementById('sintact');
       sintact.innerHTML = "";
}