const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

const getPairs = arr => {
    let girls = arr.filter(e => e[e.length - 1] === 'а');
    let boys = arr.filter(e => e[e.length - 1] !== 'а');
    let res = [];
    for (let i = 0; i < arr.length / 2; i++) {
        res.push([boys[i], girls[i]]);
    }
    return res;
};

const pairs = getPairs(students);
console.log(pairs);

const getPairsWithThemes = (arr1, arr2) => {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        res.push([arr1[i].join(' & '), arr2[i]]);
    }
    return res;
};

const pairsWithThemes = getPairsWithThemes(pairs, themes);
console.log(pairsWithThemes);

const getStudentsMarks = (arr1, arr2) => {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        res.push([arr1[i], arr2[i]]);
    }
    return res;
};

const studentsMarks = getStudentsMarks(students, marks);
console.log(studentsMarks);

const getRandomMark = () => Math.round(Math.random() * 4 + 1);

const getPairsMarks = arr => arr.map(e => e.concat(getRandomMark()));

const pairsMarks = getPairsMarks(pairsWithThemes);
console.log(pairsMarks);