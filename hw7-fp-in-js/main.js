const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    return +(this.tax * salary).toFixed(2);
}
console.log('getMyTaxes.call(ukraine, 1500): ', getMyTaxes.call(ukraine, 1500));

function getMiddleTaxes() {
    return +(this.tax * this.middleSalary).toFixed(2);
}
console.log('getMiddleTaxes.call(latvia): ', getMiddleTaxes.call(latvia));

function getTotalTaxes() {
    return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
}
console.log('getTotalTaxes(litva): ', getTotalTaxes.call(litva));

function getMySalary() {
    const salary = Math.round(Math.random() * 500 + 1500);
    const taxes = +(this.tax * salary).toFixed(2);
    return {
        salary: salary,
        taxes: taxes,
        profit: +(salary - taxes).toFixed(2)
    }
}
console.log('getMySalary.call(ukraine): ', getMySalary.call(ukraine));

const getMySalaryLog = () => console.log('getMySalary.call(ukraine): ', getMySalary.call(ukraine));

setInterval(() => getMySalaryLog(), 10000);