const calculateBill = (total, tipPercent = 10) => {
  const tip = total * (tipPercent / 100);
  return total + tip;
};

const fahrenheitToCelsius = (temp) => {
  return (temp - 32) / 1.8;
};

const celsiusToFahrenheit = (temp) => {
  return temp * 1.8 + 32;
};

const calculateSum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers must be positive.");
      }
      resolve(a + b);
    }, 500);
  });
};

module.exports = {
  calculateBill,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  calculateSum
};
