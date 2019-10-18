let num = 266219;
let digits = num.toString().split('');
let realDigits = digits.map(Number);
let numbers = realDigits[0] * realDigits[1] * realDigits[2] * realDigits[3] * 
    realDigits[4] *realDigits[5];
console.log('умножение цифр числа "266219" = ' + numbers);

let extent = numbers ** 3;
alert('Первые две цыфры: ' + String(extent).slice(0,2));
//console.log(String(extent).slice(0,2));
