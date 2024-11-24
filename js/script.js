let operate = document.getElementById("operate");
let webText = document.getElementById("webText");
let result = document.getElementById("result");
let userNumber = document.getElementById("userNumber");
let webNumber = document.getElementById("webNumber");

document.querySelectorAll(".number").forEach((number) => {
  number.innerHTML = Math.ceil(Math.random() * 99);
});

result.value = Math.ceil(Math.random() * 99);

let operateTable = ["+", "-", "*", "/"];
operate.innerHTML = operateTable[Math.floor(Math.random() * 4)];

function handleClick() {
  let number = this.innerHTML;

  if (webNumber.value >= 2 || webNumber.value >= 1) {
    webText.innerHTML =
      '<span style="color: red">Nie można podać więcej niż jedną liczbę</span>';
    return;
  } else if (webNumber.value == 2 || webNumber.value == 1) {
    webText.innerHTML = "";
    return;
  }

  this.style.backgroundColor = "rgba(207, 201, 35, 1)";
  this.style.color = "black";

  webNumber.value += number;
}

document.querySelectorAll(".number").forEach((chooseNumber) => {
  chooseNumber.addEventListener("click", handleClick);
});

function reset() {
  webNumber.value = "";
  userNumber.value = "";
  webText.innerHTML = ".";
  webText.style.opacity = "";

  document.querySelectorAll(".number").forEach((reset_number) => {
    reset_number.style.backgroundColor = "";
    reset_number.style.color = "";
  });
}

function checkTheResult() {
  let check_result = eval(
    webNumber.value + operate.textContent + userNumber.value
  );
  console.log(check_result);
  if (check_result == result.value) {
    webText.innerHTML =
      "<span style='color: green'><b>BRAWO!!!</b> udało ci się zgadnąć </span>";
  } else if (check_result != result.value) {
    webText.innerHTML =
      "<span style='color: red'><b>ŹLE!!!</b> spróbuj jeszcze raz </span>";
  }
}

function drawClick() {
  document.querySelectorAll(".number").forEach((number) => {
    number.innerHTML = Math.ceil(Math.random() * 99);
    number.style.backgroundColor = "";
    number.style.color = "";
  });
}
