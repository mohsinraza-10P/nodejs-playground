// ---- Promise example
// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([7, 7, 7]);
//     reject("Sorry, something went wrong!");
//   }, 2000);
// });

// doWorkPromise
//   .then((result) => {
//     console.log("Success:", result);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// ---- Promise chaining example
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

add(5, 5)
  .then((sum1) => {
    console.log("1st Sum:", sum1);
    return add(sum1, 2)
  })
  .then((sum2) => {
    console.log("2nd Sum:", sum2);
  })
  .catch((e) => {
    console.error("Exception:", e);
  });
