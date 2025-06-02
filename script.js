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

 let second = value * 2;
let sencProm = await new Promise((resolve, reject) => {
   
    setTimeout(() =>
   output.innerHTML = (`Result: ${second}`)
    , 2000);
    resolve(second);
    //Multiply the number by 2 and display it in the div as Result: <number>.

  });

let third = second - 3
let thirdPrm = await new Promise((resolve, reject) => {
    
    setTimeout(() => 
  output.innerHTML = (`Result: ${third}`)
    , 1000);
    resolve();
    //subtract 3 from the number and display it as Result: <number>.
});
 let forth = third /2;
let forthPrm = await new Promise((resolve, reject) => {
 
  setTimeout(() =>
output.innerHTML = (`Result: ${forth}`)
    , 1000);
    resolve();
    //Divide the number by 2 and display it as Result: <number>.

  });
  
  let five = forth + 10;
let fivePrm = await new Promise((resolve, reject) => {
  
  setTimeout(() =>
  output.innerHTML = (`Result: ${five}`)
    , 1000);
    resolve();
    //Add 10 to the number and display it as Final Result: <number>.

 });
  
})


