var input = document.getElementByID('input');
var value = input.value;

document.cookie = "text=$(value)";
function displayCookie() {
  input.innerHTML('value');
}
