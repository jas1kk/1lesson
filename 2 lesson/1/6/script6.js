let amount = prompt('Введите сумму в долларах США:', 0);
    let currency = prompt('EUR = 1, UAH = 2, AZN = 3', 0);
    switch(currency) {
        case '1':
            console.log(amount*0.89 + 'EUR');
            break;
        case '2':
            console.log(amount*25.90 + 'UAH');
            break;
        case '3':
            console.log(amount*1.69 + 'AZN');
            break;
    }