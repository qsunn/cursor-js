class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }

    studentMarks = [];
    isBanned = false;

    get marks() {
        return this.isBanned ? null : this.studentMarks;
    }

    set marks(mark) {
        return this.isBanned ? null : this.marks.push(mark);
    }

    getInfo() {
        return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
    }

    getAverageMark() {
        return this.isBanned || !this.marks.length ? null : +(this.marks.reduce((acc, e) => acc + e) / this.marks.length).toFixed(2);
    }

    dismiss() {
        this.isBanned = true;
        return `Студента ${this.fullName} відсторонено.`
    }

    recover() {
        this.isBanned = false;
        return `Студента ${this.fullName} відновлено.`
    }
}

const student = new Student('ВНЗ Цукеркового Королівства', 2, 'Фін Хлопчисько');
console.log('student.getInfo(): ', student.getInfo());
console.log('student.marks: ', student.marks);
console.log('student.marks = 5: ', student.marks = 5);
console.log('student.marks = 5: ', student.marks = 4);
console.log('student.marks = 5: ', student.marks = 4);
console.log('student.marks = 5: ', student.marks = 5);
console.log('student.marks = 5: ', student.marks = 5);
console.log('student.marks: ', student.marks);
console.log('student.getAverageMark(): ', student.getAverageMark());

console.log('student.dismiss(): ', student.dismiss());
console.log('student.marks = 3: ', student.marks = 3);
console.log('student.marks: ', student.marks);

console.log('student.recover(): ', student.recover());
console.log('student.marks = 4: ', student.marks = 4);
console.log('student.marks: ', student.marks);

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        setInterval(() => this.getScholarship(), 30000);
    }

    getScholarship() {
        if (!this.isBanned && this.getAverageMark() >= 4) console.log(`Студенту ${this.fullName} начислено 1400 грн. стипендії`);
    }
}

const budgetStudent = new BudgetStudent('ВНЗ Цукеркового Королівства', 4, 'Принцеса Бубльгум');
console.log('budgetStudent.getInfo(): ', budgetStudent.getInfo());
console.log('budgetStudent.marks: ', budgetStudent.marks);
console.log('budgetStudent.marks = 5: ', budgetStudent.marks = 5);
console.log('budgetStudent.marks = 5: ', budgetStudent.marks = 5);
console.log('budgetStudent.marks = 5: ', budgetStudent.marks = 5);
console.log('budgetStudent.marks = 5: ', budgetStudent.marks = 4);
console.log('budgetStudent.marks: ', budgetStudent.marks);
console.log('budgetStudent.getAverageMark(): ', budgetStudent.getAverageMark());