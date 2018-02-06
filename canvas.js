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
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
	   context.beginPath();
	   context.rect(e.offsetX, e.offsetY, 25, 25);
	   context.fill();
     context.moveTo(e.offsetX, e.offsetY);
    }
  else{
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
	   context.beginPath();
	   context.arc(e.offsetX, e.offsetY, 12, 0, 2*Math.PI);
	   context.fill();
     context.moveTo(e.offsetX, e.offsetY);
    }
}

var clearBoard = function(e){
    context.clearRect(0,0,context.canvas.clientWidth,context.canvas.clientHeight);
}

paint.addEventListener("click", changeShape);
canvas.addEventListener("click", draw);
clear.addEventListener("click", clearBoard)
