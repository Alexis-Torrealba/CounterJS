const contador = document.querySelector('#number');
const suma = document.querySelector('#sum');
const resta = document.querySelector('#rest');
const text = document.querySelector('#text');
const error = document.querySelector("error")

let numero = 0;

suma.addEventListener('click', () => {
	numero++;
	contador.innerHTML = numero;
	if(numero >= 0){
		contador.classList.remove("redText")
	}
	evaluar();
});

resta.addEventListener('click', () => {
	numero--;
	contador.innerHTML = numero;
	if(numero < 0){
		contador.classList.add("redText")
		error.innerHTML= "Fallo!, números negativos"
		error.classList.add("redText")
	} 
	evaluar();
});

const evaluar = () => {
	if (numero >= 10) {
		text.innerHTML = 'Felicidades Ganaste!';
	} else {
		text.innerHTML = '';
	}
};


