let amount = prompt('Введите стоимость покупки:');
    if (amount >=200 && amount < 300)
        alert(amount/100*97 + '$ со скидкой 3%');
    else if (amount >=300 && amount < 500)
        alert(amount/100*95 + '$ со скидкой 5%');
    else if (amount >=500)
        alert(amount/100*93 + '$ со скидкой 7%');