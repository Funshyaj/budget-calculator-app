var itemPrice = document.getElementsByClassName("itemPrice");
var budgetElement = document.getElementById("fixedBudget");
eventlistener()

function calculate(event) {
  event.preventDefault()
  itemPrice = document.getElementsByClassName("itemPrice");
  var totalExpenses=0
  for(let i=0; i<itemPrice.length; i++){
    if(itemPrice[i].value!=="")
      totalExpenses+=itemPrice[i].value*1
  }
var budget = document.getElementById("fixedBudget").value;
budget -= totalExpenses;
   document.getElementById('totalExpenses').innerHTML = totalExpenses;
 document.getElementById("balance").innerHTML = budget;
}

function eventlistener(){
for(let i=0; i<itemPrice.length; i++){
  itemPrice[i].addEventListener('input', calculate)
};

budgetElement.addEventListener('input', calculate)
}

function add(){
  var text_input=document.createElement("input")
var price_input= document.createElement("input")
var text_div= document.getElementById("textInput")
var price_div= document.getElementById("priceInput")

text_input.type="text"
text_input.name="itemName"
price_input.classList.add("itemPrice")
price_input.type="number"
price_input.value=1

text_div.appendChild(document.createElement("br"))
text_div.appendChild(text_input)
price_div.appendChild(document.createElement("br"))
price_div.appendChild(price_input)

eventlistener()
}