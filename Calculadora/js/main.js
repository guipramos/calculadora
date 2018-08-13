function calcular(){
	var resultado = 0;
	resultado = document.querySelector(".numero").value;
	document.querySelector(".numero").value = "";
	document.querySelector(".numero").value = eval(resultado);
}

function limpar(){
	var visor = document.querySelector(".numero").value = "";
}

function preencher(valor){
	var visor = document.querySelector(".numero").value += valor;
}

