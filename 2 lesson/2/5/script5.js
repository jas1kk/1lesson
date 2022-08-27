
function AmicableNumbers(num1,num2){
    let sum1 = 0;
    let sum2 = 0;
    let reminder1;
    let reminder2;
    for(let i = 1 ; i < num1 - 1; i++){
        reminder1=num1%i;
        if(reminder1 === 0){
            sum1 +=i;
       }
    }
    for ( let j = 1; j < num2 - 1; j++){
        reminder2- num2%j;
        if(reminder2 === 0) {
            sum2 += j;
       }
    }
    if(num1 === sum2 && num2 === sum1) {
        alert(num1 + ' и ' + num2 + ' - Дружественные числа!');
    } else {
        alert('Это совершенные числа!');
    }
}