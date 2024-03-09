const numero = document.querySelector('#numero');
const addButton = document.querySelector('#sum');
const restButton = document.querySelector('#rest');
const text = document.querySelector('#text');

// const result = () => {
// 	addNumber.addEventListener('click', () => {
// 		adda(number);
// 	});
// };

// const adda = (number) => {
// 	const total = number + 1;
// };

//--------------------------
let counter = 0;

const add = () => {
	counter++;
	numero.value = counter;
	checkCounter();
};

const rest = () => {
	counter--;
	numero.value = counter;
	checkCounter();
};

const checkCounter = () => {
	if (counter >= 10) {
		text.classList.remove('textoHidden');
		text.classList.add('textoVisible');
	} else {
		text.classList.remove('textoVisible');
		text.classList.add('textoHidden');
	}
};

addButton.addEventListener('click', add);
restButton.addEventListener('click', rest);
