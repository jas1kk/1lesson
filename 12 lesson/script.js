// 4

let lightStates = {red:0,amber:1,green:2};
let currentState = lightStates.red;

document.getElementById('changeBtn').onclick=function(){
	changeState();
};


function changeState()
{
	clear();
  switch(currentState)
  {
    case lightStates.red:
    {
      document.getElementById("red").className ="light red";
      currentState =  lightStates.amber;
    }
  	break;
    case lightStates.amber:
    {
      document.getElementById("amber").className ="light amber";
      currentState = lightStates.green;
    } break;
     case lightStates.green:
    {
      document.getElementById("green").className ="light green";
      currentState = lightStates.red;
    } break;
   }
}

function clear(){
   document.getElementById("red").className ="light off";
   document.getElementById("amber").className ="light off";
   document.getElementById("green").className ="light off";
}

// 5

// let list = document.querySelectorAll('.bookList ol');
 
// function setSelected() {
//   document.querySelectorAll('.bookList ol.selected').forEach(function (el) {
//     el.classList.remove('selected');
//   });
//   this.classList.add('selected');
// }
 
// list.forEach(function(ol) {
//    ol.onclick = setSelected;
// });

// 6

// let tooltipElem;

// document.onmouseover = function(event) {
//   let target = event.target;


//   let tooltipHtml = target.dataset.tooltip;
//   if (!tooltipHtml) return;



//   tooltipElem = document.createElement('div');
//   tooltipElem.className = 'tooltip';
//   tooltipElem.innerHTML = tooltipHtml;
//   document.body.append(tooltipElem);


//   let coords = target.getBoundingClientRect();

//   let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
//   if (left < 0) left = 0;

//   let top = coords.top - tooltipElem.offsetHeight - 5;
//   if (top < 0) {
//     top = coords.top + target.offsetHeight + 5;
//   }

//   tooltipElem.style.left = left + 'px';
//   tooltipElem.style.top = top + 'px';
// };

// document.onmouseout = function(e) {

//   if (tooltipElem) {
//     tooltipElem.remove();
//     tooltipElem = null;
//   }

// };

// 1

// function validateForm() {
//     var x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//         alert("Необходимо ввести имя");
//         return false;
//     }
// } 

// 3

// const lea = document.querySelector("#lea");
// const ball = document.querySelector("#ball");


// ball.style.left = 0 + "px";
// ball.style.top = 0 + "px";

// lea.onclick = function(e) {
//   ball.style.left = e.pageX - ball.offsetWidth / 2 + "px";
//   ball.style.top = e.pageY - ball.offsetHeight / 2 + "px";

//   if (lea.offsetHeight - 25 < e.pageY) {
//     ball.style.top = lea.offsetHeight - 25 + "px";
//   }

//   if (lea.offsetWidth - 25 < e.pageX) {
//     ball.style.left = lea.offsetWidth - 25 + "px";
//   }

//   if (e.pageY < ball.offsetHeight / 2) {
//     ball.style.top = 0 + "px";
//   }
//   if (e.pageX < ball.offsetWidth / 2) {
//     ball.style.left = 0 + "px";
//   }
// };