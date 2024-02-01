function updateProduct(inputId, total, price, isIncreasing) {
  const productInput = document.getElementById(inputId);
  let productNumber = productInput.value;
  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;

  } else if (isIncreasing == false && productInput.value > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;

  const caseTotal = document.getElementById(total);
  caseTotal.innerText = productNumber * price;
  // calculateTotal
  calculateTotal();
}

function getInputValue(inputId) {
  const productInput = document.getElementById(inputId);
  const productNumber = parseInt(productInput.value);
  return productNumber;

}
function calculateTotal() {
  const phoneTotal = getInputValue('phone-number') * 1219;
  const caseTotalAmount = getInputValue('case-number') * 59;
  const subTotal = phoneTotal + caseTotalAmount;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;
//  update on the html
document.getElementById('sub-total').innerText = subTotal;
document.getElementById('tax').innerText = tax;
document.getElementById('total-price').innerText = totalPrice;
}
document.getElementById('case-plus').addEventListener('click', function () {
  updateProduct('case-number', 'case-total', 59, true)
})

document.getElementById('case-minus').addEventListener('click', function () {
  updateProduct('case-number', 'case-total', 59, false)
})
document.getElementById('phone-plus').addEventListener('click', function () {
  updateProduct('phone-number', 'phone-total', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
  updateProduct('phone-number', 'phone-total', 1219, false)
})