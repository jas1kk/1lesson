h = +prompt('часы');
m = +prompt('минуты');
s = +prompt('секунды');
function seconds (a,b,c) {
return (h * 3600) + (m * 60) + s
}
alert(seconds(h,m,s))