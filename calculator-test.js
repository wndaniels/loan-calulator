
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 1000,
    years: 10,
    rate: 2
  }
  expect(calculateMonthlyPayment(values)).toEqual('9.20')
});


it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 15000,
    years: 10,
    rate: 1.9
  }
  expect(calculateMonthlyPayment(values)).toEqual('137.35')
});

it("equate high intrest rates", function () {
  const values = {
    amount: 10,
    years: 30,
    rate: 60
  }
  expect(calculateMonthlyPayment(values)).toEqual('0.50')
});
