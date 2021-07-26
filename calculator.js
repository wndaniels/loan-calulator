window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calc-form');
  if (form) {
    setupIntialValues();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById('loan-amount').value,
    years: +document.getElementById('loan-years').value,
    rate: +document.getElementById('loan-rate').value
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment

function setupIntialValues() {
  const values = { amount: 0, years: 0, rate: 2.25 };
  const loanAmount = document.getElementById('loan-amount');
  loanAmount.value = values.amount;
  const loanYears = document.getElementById('loan-years');
  loanYears.value = values.years;
  const loanRate = document.getElementById('loan-rate');
  loanRate.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentInputValue = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentInputValue));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const years = Math.floor(values.years * 12);
  const returnValue = (monthlyRate * values.amount) / (1 - Math.pow((1 + monthlyRate), -years));
  if (returnValue && returnValue > 0) {
    return returnValue.toFixed(2)
  } else {
    return 0
  }
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(input) {
  const monthly = parseFloat(input)
  const inputMonthly = document.getElementById('monthly-payment');
  return inputMonthly.innerText = '$' + monthly
}