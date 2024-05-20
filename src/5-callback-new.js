const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("This is the error!", undefined);
    callback(undefined, [1, 4, 5]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
});
