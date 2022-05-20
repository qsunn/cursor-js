let N;
let M;

while (!(Number.isInteger(parseInt(N)) && N % 1 === 0)) {
    N = prompt('Count from: ', '');
}

do {
    M = prompt('To: ', '');
} while (!(Number.isInteger(parseInt(M)) && M % 1 === 0 && +M > +N));

N = +N;
M = +M;

const isOnlyOdds = confirm('Skip even numbers?');
let sum = 0;

for (let i = N; i <= M; i++) {
    if (isOnlyOdds && i % 2 === 0) {
        continue;
    } else {
        sum += i;
    }
}

alert('Total: ' + sum);

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    document.location.reload();
});