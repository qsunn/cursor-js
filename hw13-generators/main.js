const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');

function* createIdGenerator() {
    let i = 1;
    while (true) yield i++;
};

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* newFontGenerator(size) {
    while (true) {
        document.body.style.fontSize = size + 'px';
        let dir = yield size;
        if (dir === 'up') size += 2;
        if (dir === 'down') size -= 2;
    }
}

const fontGenerator = newFontGenerator(14);

console.log(`next(): ${fontGenerator.next().value}`);
console.log(`next('up'): ${fontGenerator.next('up').value}`);
console.log(`next('up'): ${fontGenerator.next('up').value}`);
console.log(`next('up'): ${fontGenerator.next('up').value}`);
console.log(`next(): ${fontGenerator.next().value}`);
console.log(`next('down'): ${fontGenerator.next('down').value}`);
console.log(`next(): ${fontGenerator.next().value}`);

plus.addEventListener('click', () => fontGenerator.next('up'));
minus.addEventListener('click', () => fontGenerator.next('down'));