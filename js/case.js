document.getElementById("btn-case-plus").addEventListener("click", function () {
  const caseBuy = plusBtn("case-number-field");
  casePrice(caseBuy);
  phoneCaseSum();
});

document.getElementById("btn-case-minus").addEventListener("click", function () {
  const caseBuy = minusBtn("case-number-field");
  casePrice(caseBuy);
  phoneCaseSum();
});

const caseCurrentAmount = stringToNumber("case-total");

function casePrice(priceID) {
  const priceValue = document.getElementById("case-total");
  priceValue.innerText = priceID * caseCurrentAmount;
}
