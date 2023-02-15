function plusBtn(plusButton) {
  const inputField = document.getElementById(plusButton);
  let inputFieldValue = inputField.value;
  inputFieldValue = parseInt(inputFieldValue);

  const plus = inputFieldValue + 1;
  inputField.value = plus;
}

function minusBtn(minusButton) {
  const inputFieldMinus = document.getElementById(minusButton);
  let inputFieldMinusValue = inputFieldMinus.value;
  inputFieldMinusValue = parseInt(inputFieldMinusValue);

  const minus = inputFieldMinusValue - 1;

  if (minus < 0) {
    setAttribute("disable");
  }
  inputFieldMinus.value = minus;
}
