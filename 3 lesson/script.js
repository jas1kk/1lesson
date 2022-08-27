//1

let a = Number(prompt("введите начало диапазона",""));
let n = Number(prompt("введите конец диапазона",""));
let sum = 0;
 
while(a <= n){       
       sum+=a;  
       a++;
    }
 
alert(sum)

//-----------------------------------------------------------

//2

// alert('Введите 2 число, что бы найти НОД')
// let numb1 = prompt('Введите первое число');
// let numb2 = prompt('Введите второе число');
// let numb3;


// calc(numb1, numb2)
// alert('НОД чисел ' + numb1 + ' и ' + numb2 + ' будет: ' + numb3)

// function calc(a, b) {
//   let c;
//   while (a != b) {
//     if (a > b) {
//       a = a - b;

//     } else
//     if (a < b) {
//       c = a;
//       a = b;
//       b = c;
//     }

//   }
//   return numb3 = a
// }

//-----------------------------------------------------------

//3

// let number = 15;
// for (var i=1; i<=number; i++) {
//   if (number%i==0 && number==!number && number==!1) {
//     console.log(i);
//   }
// }

//-----------------------------------------------------------

//4

// let str = 'string';

// console.log('В переменной str %s знаков', str.length);
// function countDigits(n) {
//     for(let i = 0; n > 1; i++) {
//        n /= 10;
//     }
//     return i;
//  }

//-----------------------------------------------------------

//5

// let Q1 = 0, Q2 = 0;
// let N = prompt("введите 10 чисел: ", );
// if(N){
//     N.split(" ").map(function(s){
//         let num = parseInt(s);
//         if(num !== NaN){
//             if (num > 0 && num != 0){ Q1++; }
//             else { Q2++; } 
//         }
//     });
// }
 
// if(Q1>0){
//     alert("Количество положительных: " + Q1);
// }
// else{
//     alert("Положительных чисел нет"); 
// }
 
// if(Q1>0){
//     alert("Количество отрицательных: " + Q2);
// }
// else {
//     alert("Отрицательных чисел нет");
// }

//-----------------------------------------------------------

//6

// while (true) {
//     const a = +prompt('Введите первое число');
//     const b = +prompt('Введите второе число');
//     const op = prompt('Выберете знак - + / *');
//     const action = {
//       '+': () => a + b,
//       '-': () => a - b,
//       '/': () => a / b,
//       '*': () => a * b
//     }[op];
//     if (action) alert(action());
   
//     if (!confirm('Хотите ли вы решить еще один пример?')) break;
//   }

//-----------------------------------------------------------

//7

// let str = prompt("Введите число!");
// let k = prompt("На сколько цифр его сдвинуть?");

// console.log(str.replace(RegExp("(\\d{" + k + "})(\\d*)$"), "$2$1"));

//-----------------------------------------------------------

//8

// const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let currDay = 0;

// while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
//   currDay = (currDay + 1) % days.length;
// }

//-----------------------------------------------------------

//9

// let table, row, cell, i, j;

//     table = document.createElement('table');

//     table.style.textAlign = 'right';

//     table.style.fontFamily = 'monospace';

//     for (i=1; i<10; i++) {

//         row = document.createElement('tr');

//         for (j=1; j<10; j++) {

//             cell = document.createElement(i == 1 || j == 1 ? 'th' : 'td');

//             cell.appendChild(document.createTextNode(i*j));

//             cell.style.padding = '4px';

//             cell.style.width = 100 / 9 + '%';

//             row.appendChild(cell);

//         }

//          table.appendChild(row);

//     }

// document.body.appendChild(table);

