function typeWriter(elemento) {
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = '';

	var escrever = function(letra, i){

		var add = function() {
			elemento.innerHTML += letra;
		}

		setTimeout(add, 75*i)
	}

	textoArray.forEach(escrever);
}

typeWriter(document.getElementById('titulo1'));
typeWriter(document.getElementById('subtitulo1'));