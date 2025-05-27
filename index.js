//okay hers is where the js stuff for the app goes like the aray 

let index = Math.random();
let array = ["the CIA","please do not throw sauasage pizza away","the pryramid of pain","secDEVOPS","Ip model","Defnse in depth"];

//grab button 
  let button = document.getElementById("generate")
  let result = document.getElementById("result")// this looks like an element tag 

  //now put in action 
button.addEventListener("click",()=>{
    let index = Math.floor(Math.random() * array.length)
    result.textContent = array[index];

})
console.log(index)