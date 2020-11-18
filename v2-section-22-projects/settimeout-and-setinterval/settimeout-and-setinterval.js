// ********** SetTimeout **********
console.log("This console.log is before the setTimeout.");
setTimeout(() => {
  console.log("This console.log is the setTimeout console.log");
}, 3000);
console.log("This console.log is after the setTimeout.");

// ********** SetInterval **********

const id = setInterval(() => {
  console.log(
    "This console.log is set with setInterval, so it gets printed every 3 seconds."
  );
}, 3000);

console.log("To clear setInterval type in: clearInterval(id).");
