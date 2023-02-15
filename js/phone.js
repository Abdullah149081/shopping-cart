document.getElementById("btn-phone-plus").addEventListener("click", function () {
  const phoneBuy = plusBtn("phone-number-field");
  phonePrice(phoneBuy);
});

document.getElementById("btn-phone-minus").addEventListener("click", function () {
  const phoneBuy = minusBtn("phone-number-field");
  phonePrice(phoneBuy);
});

const phoneCurrentAmount = stringToNumber("phone-total");

function phonePrice(priceID) {
  const priceValue = document.getElementById("phone-total");
  priceValue.innerText = priceID * phoneCurrentAmount;
}
