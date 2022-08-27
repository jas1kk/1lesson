let myYear = +prompt ('Введите год');
let realDate = new  Date (myYear, 1, 29).getDate ();
if (realDate == 29) alert ('Високосный год '); else alert ('Не Високосный год ');
