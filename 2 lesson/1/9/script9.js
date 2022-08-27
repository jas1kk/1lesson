alert(" Ответьте на 3 вопроса:");
    var score = 0;
    while (1) {
        var q1 = parseInt(prompt("1*1= (0|1|2)"));
        if (q1===0||q1===1||q1===2){
            q1 == 1 ? score++ : alert("Неправильный ответ!");
            break;
        }
    };
    
    while (1) {
        var q2 = parseInt(prompt("1+1= (0|1|2)"));
        if (q2===0||q1===1||q1===2){
            q2 == 2 ? score++ : alert("Неправильный ответ!");
            break;
        }
    };
    
    while (1) {
        var q3 = parseInt(prompt("√1= (0|1|2)"));
        if (q3===0||q1===1||q1===2){
            q3 == 1 ? score++ : alert("Неправильный ответ!");
            break;
        }
    };
    alert("Ваши очки:" + score);