const math = require("../src/util/math");

// Setup
// beforeAll(() => {})
// beforeEach(() => {})

// Teardown
// afterAll(() => {})
// afterEach(() => {})

test("Calculate total bill with tip", () => {
  const total = math.calculateBill(100, 20);
  expect(total).toBe(120);
});

test("Calculate total bill with default tip", () => {
  const total = math.calculateBill(100);
  expect(total).toBe(110);
});

test("Should convert 32 F to 0 C", () => {
  const temp = math.fahrenheitToCelsius(32);
  expect(temp).toBe(0);
});

test("Should convert 0 C to 32 F", () => {
  const temp = math.celsiusToFahrenheit(0);
  expect(temp).toBe(32);
});

// Promise example
test("Should calculate sum of two numbers via promise", (done) => {
  math.calculateSum(5, 5).then((sum) => {
    expect(sum).toBe(10);
    done();
  });
});

// Async-Await example
test("Should calculate sum of two numbers via async/await", async () => {
  const sum = await math.calculateSum(7, 5);
  expect(sum).toBe(12);
});
