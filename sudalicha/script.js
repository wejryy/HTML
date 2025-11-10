
const form = document.getElementById('numberForm');
const input = document.getElementById('numberInput');
const result = document.getElementById('result');


form.addEventListener('submit', (e) => {
e.preventDefault(); 


const value = input.value.trim();
const number = Number(value);



if (!Number.isInteger(number) || number <= 0) {
alert('Zadej prosím celé kladné číslo!');
result.textContent = 'Neplatný vstup. Zadej celé kladné číslo.';
result.className = 'result invalid';
return;
}

if (number % 2 === 0) {
alert('Číslo je sudé');
result.textContent = `Číslo ${number} je sudé.`;
result.className = 'result even';
} else {
alert('Číslo je liché');
result.textContent = `Číslo ${number} je liché.`;
result.className = 'result odd';
}


if (isPrime(number)) {
const primeMsg = `Číslo ${number} je také prvočíslo.`;
result.textContent += ` ${primeMsg}`;
}
});


function isPrime(n) {
if (n < 2) return false;
for (let i = 2; i <= Math.sqrt(n); i++) {
if (n % i === 0) return false;
}
return true;
}