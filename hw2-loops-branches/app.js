let N;
let M;

while (!(Number.isInteger(parseInt(N)))) {
    N = prompt('Count from: ', '');
}

do {
    M = prompt('To: ', '');
} while (!(Number.isInteger(parseInt(M)) && +M > +N));

N = +N;
M = +M;

const isOnlyOdds = confirm('Skip even numbers?');
let sum = 0;

for (N; N <= M; N++) {
    if (isOnlyOdds) {
        N % 2 ? sum += N : null;
    } else {
        sum += N;
    }
}

alert('Total: ' + sum);
document.location.reload();