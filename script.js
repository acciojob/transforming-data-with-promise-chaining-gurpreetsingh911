let num = document.getElementById("ip")
let button = document.getElementById("btn")
let output = document.getElementById("output")

let value = num.value;

button.addEventListener("click", async function(event){
event.preventDefault();

let promise = new Promise((resolve, reject) => {


setTimeout(() => {
output.innerHTML = (`Result: ${value}`)
},2000)
resolve();
})

let sencProm = await new Promise((resolve, reject) => {
    let second = value * 2;
    setTimeout(() =>
    output.innerHTML = (`Result: ${second}`)
    , 2000);
    resolve();
  });

let thirdPrm = await new Promise((resolve, reject) => {
    let third = value - 3
    setTimeout(() => 
  	output.innerHTML = (`Result: ${third}`)
    , 1000);
    resolve();
});

let forthPrm = await new Promise((resolve, reject) => {
  let forth = value /2;
  setTimeout(() =>
	output.innerHTML = (`Result: ${forth}`)
    , 1000);
    resolve();
  });
  
let fivePrm = await new Promise((resolve, reject) => {
  let five = value + 10;
  setTimeout(() =>
  output.innerHTML = (`Result: ${five}`)
    , 1000);
    resolve();
 });
  
  
})


