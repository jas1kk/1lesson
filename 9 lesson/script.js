//7

//  let op; 

//  function func() {
//    let result;
//    let num1 = Number(document.getElementById("num1").value);
//    let num2 = Number(document.getElementById("num2").value);
//    switch (op) {
//      case '+':
//        result = num1 + num2;
//        break;
//      case '-':
//        result = num1 - num2;
//        break;
//      case '*':
//        result = num1 * num2;
//        break;
//      case '/':
//        result = num1 / num2;
//        break;
//    }

//    document.getElementById("result").innerHTML = result;
//  }

//8

// function test8(strUrl){
//     let link = document.createElement('a');
//     link.href = strUrl;
//     return {
//         "protocol": link.protocol,
//         "hostname": link.hostname,
//         "path": link.pathname
//     };
// }
 
// function test888(strUrl){

//     return new URL(strUrl);
// }
 
// let urlStr = 'https://www.youtube.com';
// let objURL = test8(urlStr);
// console.log(objURL);

//10

// function printf(template, ...values) {
//     return template.replace(/%(\d+)/g, (str, num) => [...values][num - 1]);
//   }
//   console.log(printf("Today is %1 %2.%3.%4", "Friday", 16, 9, 2022));