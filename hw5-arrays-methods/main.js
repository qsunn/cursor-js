const getRandomArray = (length, min, max) => {
    const res = [];
    const getRandomNumber = () => Math.round(Math.random() * (max - min) + min);
    for (let i = 0; i < length; i++) {
        res.push(getRandomNumber());
    }
    return res;
}
console.log('getRandomArray(10, 0, 10): ', getRandomArray(10, 0, 10));

const getMode = (...numbers) => numbers.sort((a, b) => numbers.filter(e => e === a).length - numbers.filter(e => e === b).length).pop();

console.log('getMode(1, 5, 3, 2, 3, 3, 3, 4, 4, 3): ', getMode(1, 5, 3, 2, 3, 3, 3, 4, 4, 3));

const getAverage = (...numbers) => +(numbers.reduce((acc, e) => acc + e) / numbers.length).toFixed(1);

console.log('getAverage(2, 4, 6, 8, 10, 12): ', getAverage(2, 4, 6, 8, 10, 12));

const getMedian = (...numbers) => {
    const sorted = numbers.sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
console.log('getMedian(1, 2, 3, 4): ', getMedian(1, 2, 3, 4));

const filterEvenNumbers = (...numbers) => numbers.filter(e => e % 2);

console.log('filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9): ', filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));

const countPositiveNumbers = (...numbers) => numbers.filter(e => e >= 0).length;

console.log('countPositiveNumbers(1, -2, 3, -4, -5, 6): ', countPositiveNumbers(1, -2, 3, -4, -5, 6));

const getDividedByFive = (...numbers) => numbers.filter(e => !(e % 5));

console.log('getDividedByFive(2, 55, 11, 78, 55, 77, 57, 87): ', getDividedByFive(2, 55, 11, 78, 55, 77, 57, 87));

const replaceBadWords = str => {
    const filterWords = ['fuck', 'shit'];
    let censored = str.split(' ');
    filterWords.forEach(word => censored.forEach((e, i, arr) => arr[i] = e.replace(word, '*'.repeat(word.length))));
    return censored.join(' ');
}
console.log('replaceBadWords("Holy fucking shit!"): ', replaceBadWords("Holy fucking shit!"));

const divideByThree = word => {
    let prepared = word.toLowerCase().replaceAll(' ', '');
    let res = [];
    if (prepared.length <= 3) {
        return word;
    }
    for (let i = 0; i < prepared.length;) {
        res.push(prepared.slice(i, i + 3));
        i += 3;
    }
    return res;
}
console.log('divideByThree("Commander"): ', divideByThree('Commander'));

const generateCombinations = word => {
    if (word.length > 10) {
        return 'word should be less than 10 characters';
    } else if (word.length < 2) {
        return word;
    }
    let combinations = [];
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        let rest = word.slice(0, i) + word.slice(i + 1, word.length)

        for (let combination of generateCombinations(rest)) {
            combinations.includes(char + combination) ? null : combinations.push(char + combination);
        }
    }
    return combinations;
}
console.log('generateCombinations("vova"): ', generateCombinations('vova'));