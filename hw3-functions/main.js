const getMaxDigit = n => +('' + n).split('').sort((a, b) => b - a)[0];
console.log(getMaxDigit(1236));

const pow = (n, pow) => {
    let res = 1;
    for (let i = 0; i < pow; i++) {
        res *= n;
    }
    return res;
};
console.log(pow(2, 10));

const formatName = s => s[0].toUpperCase() + s.toLowerCase().slice(1);
console.log(formatName('vOvA'));

const countTaxes = n => n - n * 19.5 / 100;
console.log(countTaxes(1000));

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
console.log(getRandomNumber(1, 10));

const countLetters = (l, s) => s.toLowerCase().split('').filter(e => e === l).length;
console.log(countLetters('а', 'Асталавіста'));

const convertCurrency = s => {
    const currency = s.split('').filter(e => isNaN(e)).join('');
    const cash = s.split('').filter(e => !isNaN(e)).join('');
    if (currency === '$') {
        return cash * 25 + 'UAH';
    } else if (currency.toLowerCase() === 'uah') {
        return cash / 25 + '$';
    } else {
        return 'wrong input';
    }
};
console.log(convertCurrency('1000$'));

const getRandomPassword = (n = 8) => Math.random().toFixed(n).slice(2);
console.log(getRandomPassword());

const deleteLetters = (l, s) => s.toLowerCase().split('').filter(e => e !== l.toLowerCase()).join('');
console.log(deleteLetters('a', 'blablablA'));

const isPalindrome = s => {
    const str = s.toLowerCase().split(' ').join('');
    return str === str.split('').reverse().join('');
};
console.log(isPalindrome('Я несу гусеня'));

const deleteDuplicateLetters = s => s.toLowerCase().split('').filter((e, i, arr) => arr.indexOf(e) === arr.lastIndexOf(e)).join('');
console.log(deleteDuplicateLetters('Бісквіт був дуже ніжним'));

document.writeln(`
    <p>1. getMaxDigit(1236): ${getMaxDigit(1236)}</p>
    <p>2. pow(2, 10): ${pow(2, 10)}</p>
    <p>3. formatName('vOvA'): ${formatName('vOvA')}</p>
    <p>4. countTaxes(1000): ${countTaxes(1000)}</p>
    <p>5. getRandomNumber(1, 10): ${getRandomNumber(1, 10)}</p>
    <p>6. countLetters('а', 'Асталавіста'): ${countLetters('а', 'Асталавіста')}</p>
    <p>7. convertCurrency('1000$'): ${convertCurrency('1000$')}</p>
    <p>8. getRandomPassword(): ${getRandomPassword()}</p>
    <p>9. deleteLetters('a', 'blablablA'): ${deleteLetters('a', 'blablablA')}</p>
    <p>10. isPalindrome('Я несу гусеня'): ${isPalindrome('Я несу гусеня')}</p>
    <p>11. deleteDuplicateLetters('Бісквіт був дуже ніжним'): ${deleteDuplicateLetters('Бісквіт був дуже ніжним')}</p>
`);