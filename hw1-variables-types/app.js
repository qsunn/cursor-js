const apples = 15.678;
const oranges = 90.2345;
const bananas = 123.965;

const maxPrice = Math.max(apples, oranges, bananas);
console.log(maxPrice);

const minPrice = Math.min(apples, oranges, bananas);
console.log(minPrice);

const sum = apples + oranges + bananas;
console.log(sum);

const roundedSum = Math.floor(apples) + Math.floor(oranges) + Math.floor(bananas);
console.log(roundedSum);

const roundedToHundredthSum = Math.round(roundedSum / 100) * 100;
console.log(roundedToHundredthSum);

const isSumEven = !(roundedSum % 2);
console.log(isSumEven);

const changeFor500 = 500 - sum;
console.log(changeFor500);

const average = +(sum / 3).toFixed(2);
console.log(average);

const randomSale = Math.round(Math.random() * 98 + 1);
console.log(randomSale);

const sumWithSale = +(sum - (sum * randomSale / 100)).toFixed(2);
console.log(sumWithSale);

const netProfit = +(sumWithSale - (sum / 2)).toFixed(2);
console.log(netProfit);

document.writeln(`
<p>Максимальна ціна: ${maxPrice}</p>
<p>Мінімальна ціна: ${minPrice}</p>
<p>Сума товарів: ${sum}</p>
<p>Округлена сума товарів: ${roundedSum}</p>
<p>Округлена до сотень сума товарів: ${roundedToHundredthSum}</p>
<p>Чи є парним числом: ${isSumEven}</p>
<p>Решта з 500: ${changeFor500}</p>
<p>Середнє значення цін: ${average}</p>
<p>Випадкова знижка: ${randomSale}%</p>
<p>Ціна зі знижкою: ${sumWithSale}</p>
<p>Чистий прибуток: ${netProfit}</p>
`);