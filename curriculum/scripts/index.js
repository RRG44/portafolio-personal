var i = 0;
var txt = 'Gerardo Ramírez';
var speed = 75;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeName").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};