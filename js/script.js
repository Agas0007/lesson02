let money = 120000;
let income = '50000';
let addExspenses = 'Ноутбук, Квартира, Машина';
let deposit = true;
let mission = 1800000;
let period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(income.length);

console.log('За период ' + period + ' месяцев, цель заработать ' + mission + ' рублей.');

console.log(addExspenses.toLowerCase());
console.log(addExspenses.split(','));

let budgetDay = money/30;
console.log('Дневной бюджет: ' + budgetDay + ',' + ' остаток: ' +  money%30 + ' от деления' );