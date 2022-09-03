//2

// alert(factorial(5));
// function factorial(n) {
//     result = n;
//     for (let i = n - 1; i > 1; --i) {
//         result *= i;
//     }
//     return result;
// }

//3

// function number(a,b,c) {
//     let e = +(''+a+b+c)
//     alert(e)
//     }
//     number(1,4,9)

//5

// function AmicableNumbers(num1,num2){
//     let sum1 = 0;
//     let sum2 = 0;
//     let reminder1;
//     let reminder2;
//     for(let i = 1 ; i < num1 - 1; i++){
//         reminder1=num1%i;
//         if(reminder1 === 0){
//             sum1 +=i;
//        }
//     }
//     for ( let j = 1; j < num2 - 1; j++){
//         reminder2- num2%j;
//         if(reminder2 === 0) {
//             sum2 += j;
//        }
//     }
//     if(num1 === sum2 && num2 === sum1) {
//         alert(num1 + ' и ' + num2 + ' - Дружественные числа!');
//     } else {
//         alert('Это совершенные числа!');
//     }
// }

//6

// function is_perfect(number)
// {
// var temp = 0;
//    for(var i=1;i<=number/2;i++)
//      {
//          if(number%i === 0)
//           {
//             temp += i;
//           }
//      }
   
//      if(temp === number && temp !== 0)
//         {
//        console.log("It is a perfect number.");
//         } 
//      else
//         {
//        console.log("It is not a perfect number.");
//         }   
//  } 
// is_perfect(28); 

//7

// function getPerfect(a, b) {
//     let result = [];
//     for (let i = a; i < b; i++) {
//       sum = 0;
//       for (let n = 1; n <= i/2; n++) {
//         if (i % n === 0) sum += n;
//       }
//       if (i === sum) result.push(i);
//     }
//     return result;
//   }
   
//   console.log(getPerfect(1, 10000));
  

//8

// function setTime(h) {
//     return function setMinutes(m = 0) {
//       return function setSeconds(s = 0) {
//         return `${h}:${m}:${s}`
//       }
//     }
//   }
  
//   let time = Date.toDateString()()()();
//   console.log(time);

//9

// h = +prompt('часы');
// m = +prompt('минуты');
// s = +prompt('секунды');
// function seconds (a,b,c) {
// return (h * 3600) + (m * 60) + s
// }
// alert(seconds(h,m,s))

//10

// function format(seconds) {
//     let s = (seconds % 60).toString();
//     let m = Math.floor(seconds / 60 % 60).toString();
//     let h = Math.floor(seconds / 60 / 60 % 60).toString();
//     return `${h.padStart(2,'0')}:${m.padStart(2,'0')}:${s.padStart(2,'0')}`;
//   }
  
//   console.log(format(3600));

//11

// let first = '01/27/2022';
// let second = 'January 25, 2022';
 
// let x = new Date(first);
// let y = new Date(second);

// const diffInDays = Math.floor((x - y) / (1000 * 60 * 60 * 24));
// console.log(diffInDays);