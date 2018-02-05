var canvas = document.getElementById("slate");
var context = canvas.getContext("2d");
var paint = document.getElementById("paint");
var shape = "rect";
var clear = document.getElementById("clear");


var changeShape = function(e){
    if(shape == "rect") {
      shape = "circle";
    }
    else {
      shape = "rect";
    }
}

context.fillStyle = "blue";
var draw = function(e){
  if(shape == "rect"){
	   context.beginPath();
	    context.rect(e.clientX - 6, e.clientY - 6, 25, 25);
	     context.fill();
    }
  else{
	   context.beginPath();
	    context.arc(e.clientX, e.clientY, 12, 0, 2*Math.PI);
	     context.fill();
    }
}

var clearBoard = function(e){
    context.clearRect(0,0,context.canvas.clientWidth,context.canvas.clientHeight);
}

paint.addEventListener("click", changeShape);
canvas.addEventListener("click", draw);
clear.addEventListener("click", clearBoard)
