function plusBtn(plusButton) {
  const inputField = document.getElementById(plusButton);
  let inputFieldValue = inputField.value;
  inputFieldValue = parseInt(inputFieldValue);

  const plus = inputFieldValue + 1;

  const btn = document.getElementById("btn-phone-plus");
  if (inputFieldValue === 5) {
    alert("Sorry");
    btn.setAttribute("disabled");
  }

  inputField.value = plus;

  return plus;
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
  return minus;
}

function stringToNumber(number) {
  const numberGet = document.getElementById(number).innerText;
  let numberConvertValue = numberGet;
  numberConvertValue = parseInt(numberConvertValue);
  return numberConvertValue;
}

function phoneCaseAmount(convert) {
  const convertAmountNumber = document.getElementById(convert);
  let amountGet = convertAmountNumber.innerText;
  amountGet = parseInt(amountGet);
  return amountGet;
}

function phoneCaseSum() {
  const phoneCurrentAmount = phoneCaseAmount("phone-total");
  const caseCurrentAmount = phoneCaseAmount("case-total");
  const sumPhoneCase = phoneCurrentAmount + caseCurrentAmount;

  const subTotal = document.getElementById("sub-total");
  subTotal.innerText = sumPhoneCase;
}
