


function mais(){
  var n1 = parseInt(document.getElementById("num1").value);
  var n2 = parseInt(document.getElementById("num2").value);
  var resut = n1 + n2;
  document.getElementById("result").value = resut;
}
function menos(){
  var n1 = parseInt(document.getElementById("num1").value);
  var n2 = parseInt(document.getElementById("num2").value);
  var resut = n1 - n2;
  document.getElementById("result").value = resut;
}
function divsao(){
  var n1 = parseInt(document.getElementById("num1").value);
  var n2 = parseInt(document.getElementById("num2").value);
  var resut = n1 / n2;
  document.getElementById("result").value = resut;
}
function multi(){
  var n1 = parseInt(document.getElementById("num1").value);
  var n2 = parseInt(document.getElementById("num2").value);
  var resut = n1 * n2;
  document.getElementById("result").value = resut;
}
function expo(){
  var n1 = parseInt(document.getElementById("num1").value);
  var n2 = parseInt(document.getElementById("num2").value);
  var resut = Math.pow(n1, n2);
  document.getElementById("result").value = resut;
}