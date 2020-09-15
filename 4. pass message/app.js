let input = document.querySelector('input');
const button = document.querySelector('button');
let answer = document.querySelector('.message');

button.addEventListener("click", submitFunction);
function submitFunction() {
  if (input.value.length === 0) {
    setTimeout(hideWarningMessage, 2000);
    document.querySelector('.warning-message').style.display = "block";
    console.log("wrong");
  } else {
    answer.innerHTML = input.value;
    input.value = "";
  }
}

function hideWarningMessage() {
  document.querySelector('.warning-message').style.display = "none";
}