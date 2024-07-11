"use strict";

const myCanvas = document.getElementById("myCanvas");
// Para poder dibujar dentro de myCanvas
const context = myCanvas.getContext("2d");

// x, y, ancho, alto
// 500 - 140 = 360
// 500 - 100 = 400

// centrado en el eje x
// 250 - 70 = 180
// centrado en el eje y
// 250 - 50 = 200
// parametros    x    y  ancho alto
context.fillStyle = "red";
context.fillRect(180, 200, 140, 100);

context.fillStyle = "green";
context.fillRect(0, 0, 50, 50);
context.fillRect(60, 0, 50, 50);
context.fillRect(120, 0, 50, 50);
context.fillRect(180, 0, 50, 50);

context.fillStyle = "yellow";
context.fillRect(180, 140, 100, 100);

context.strokeStyle = "red";
context.lineWidth = 2;
context.beginPath();
context.moveTo(200, 200);
context.lineTo(100, 100);
context.stroke();

context.strokeStyle = "green";
context.lineWidth = 2;
context.beginPath();
context.moveTo(0, 200);
context.lineTo(100, 100);
context.stroke();

context.beginPath();
context.moveTo(0, 200);
context.lineTo(200, 200);
context.stroke();

function drawGrid(context, canvasWidth, canvasHeight, cellSize) {
  context.strokeStyle = "#e0e0e0";
  context.lineWidth = 1;

  // Dibujar líneas verticales y numeración en el eje X
  for (let x = 0; x <= canvasWidth; x += cellSize) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvasHeight);
    context.stroke();

    // Añadir números en el eje X
    context.fillStyle = "black";
    context.font = "10px Arial";
    context.fillText(x, x + 2, canvasHeight - 2);
  }

  // Dibujar líneas horizontales y numeración en el eje Y
  for (let y = 0; y <= canvasHeight; y += cellSize) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvasWidth, y);
    context.stroke();

    // Añadir números en el eje Y
    context.fillStyle = "black";
    context.font = "10px Arial";
    context.fillText(y, 2, y - 2);
  }
}

// Dibujar la cuadrícula
drawGrid(context, myCanvas.width, myCanvas.height, 20);
