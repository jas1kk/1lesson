let date = prompt('Введите дату - день-месяц-год');
date = date.split('-');
let oldDate = new Date(date[2], date[1]-1, date[0]);
oldDate.setDate(oldDate.getDate()+1);
alert(oldDate);