var first = '01/25/2020';
var second = 'January 15, 2020';
 
var x = new Date(first);
var y = new Date(second);

const diffInDays = Math.floor((x - y) / (1000 * 60 * 60 * 24));
console.log(diffInDays);