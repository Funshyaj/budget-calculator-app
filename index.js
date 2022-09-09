const addBtn = document.querySelector("button");
const form = document.forms[0]

//main calc function
form.addEventListener("keyup",(e)=>{
e.preventDefault()
//get the whole form with a keyup function to synchronically add up or remove the diff
let x = form.querySelectorAll(".price")
//declare needed variables
let fixedBudget = document.getElementById("fixedBudget").value
let output = document.querySelector(".output")
let firstOutput = output.firstElementChild
let secondOutput = output.lastElementChild
let narr = []
//get all the numbers values in the input
x.forEach(x=>{narr.push(x.value*1)})
//add all together
let totalExp = narr.reduce((a,b)=> a+b,0)
//get the diff
let diff = fixedBudget*1-totalExp;
//final declarations
firstOutput.innerHTML = `Your total expenses are N${totalExp}`
if(diff < 0){
secondOutput.innerHTML = `Sorry your total expenses are more than your Budget`
}
else if(diff === 0){
    secondOutput.innerHTML = `Your budget is accurate with your expenses`
}
else secondOutput.innerHTML = `Your budget balance is N${diff}`
})



//adding new input feild upon click
addBtn.addEventListener("click",()=>{
   //create new element to add when clicked
let div = document.createElement("div")
let input1 = document.createElement("input")
let p1 = document.createElement("p")
let input2 = document.createElement("input")
let p2 = document.createElement("p")

//add thier propperties
input1.type = "text";
input1.id ="input-text";
input2.type = "number";
input2.classList.add("price");
p1.innerHTML = "N";
p2.innerHTML = "&times;"
p2.id = "delete"
div.classList.add("inputs");

//appending in order
div.appendChild(input1)
div.appendChild(p1)
div.appendChild(input2)
div.appendChild(p2)
//append to form
form.appendChild(div)
})

//giving life to the x delete button
//use the form parent
form.addEventListener("click",(e)=>{
    //if its the delete button
    if (e.target.id === "delete"){
let gparent = e.target.parentElement.parentElement
let parent = e.target.parentElement
//delete the parent of that delete button
gparent.removeChild(parent)
    }
})