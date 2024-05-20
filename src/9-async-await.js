const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers must be positive.");
      }
      resolve(a + b);
    }, 500);
  });
};

const doWork = async () => {
  const result = await add(1, -99);
  const resultTwo = await add(result, 50);
  const resultThree = await add(resultTwo, -50);
  return resultThree;
};

doWork()
  .then((result) => {
    console.log("Output:", result);
  })
  .catch((e) => {
    console.error("Error:", e);
  });
