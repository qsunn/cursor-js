const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

const getSubjects = str => {
    const student = students.find(stud => stud.name === str);
    if (!student) return 'No such student';
    return Object.keys(student.subjects).map(subj => subj[0].toUpperCase() + subj.slice(1).replaceAll('_', ' '));
}
console.log('getSubjects("Tanya"): ', getSubjects("Tanya"));

const getAverageMark = str => {
    const student = students.find(stud => stud.name === str);
    if (!student) return 'No such student';
    let average = [];
    Object.values(student.subjects).forEach(subj => subj.forEach(mark => average.push(mark)));
    return +(average.reduce((acc, e) => acc + e) / average.length).toFixed(2);
}
console.log('getAverageMark("Victor"): ', getAverageMark("Victor"));

const getStudentInfo = str => {
    const student = students.find(stud => stud.name === str);
    if (!student) return 'No such student';
    const studentInfo = {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(str)
    }
    return studentInfo;
}
console.log('getStudentInfo("Anton"): ', getStudentInfo("Anton"));

const getStudentsNames = students => students.map(student => student.name).sort();
console.log('getStudentsNames(students): ', getStudentsNames(students));

const getBestStudent = students => {
    const highestMark = students.map(stud => getAverageMark(stud.name)).sort((a, b) => b - a)[0];
    return students.map(stud => getStudentInfo(stud.name)).find(stud => stud.averageMark === highestMark).name;
}
console.log('getBestStudent(students): ', getBestStudent(students));

const calculateWordLetters = str => {
    str = str.split(' ').join('').split('');
    const obj = {};
    str.forEach(l => obj[l] = (obj[l] || 0) + 1);
    return obj;
}
console.log('calculateWordLetters("test the tester"): ', calculateWordLetters("test the tester"));