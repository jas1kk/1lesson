let = prompt('Напишите трёзначное число')
var n = 123 + '';
var rez = n[n.length -1];
for(var i = n.length - 2; i >= 0; i--)
    rez += n[i];
alert(rez);