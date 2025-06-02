let num = document.getElementById("ip");
let button = document.getElementById("btn");
let output = document.getElementById("output");

button.addEventListener("click", function (event) {
  event.preventDefault();
  output.innerHTML = ""; // Clear previous output

  let value = Number(num.value);

  // Initial Promise - Step 1
  new Promise((resolve, reject) => {
    setTimeout(() => {
      output.innerHTML += `Result: ${value}<br>`;
      resolve(value);
    }, 2000);
  })

  // Step 2: Multiply by 2
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let second = result * 2;
        output.innerHTML += `Result: ${second}<br>`;
        resolve(second);
      }, 1000);
    });
  })

  // Step 3: Subtract 3
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let third = result - 3;
        output.innerHTML += `Result: ${third}<br>`;
        resolve(third);
      }, 1000);
    });
  })

  // Step 4: Divide by 2
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let fourth = result / 2;
        output.innerHTML += `Result: ${fourth}<br>`;
        resolve(fourth);
      }, 1000);
    });
  })

  // Step 5: Add 10 and show Final Result
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let final = result + 10;
        output.innerHTML += `Final Result: ${final}<br>`;
        resolve(final);
      }, 1000);
    });
  });
});
