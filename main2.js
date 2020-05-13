// exchange rate
const exchangeRate = 23333.5;
let from = document.getElementById('fromList')
let to = document.getElementById('toList')
let convertButton = document.getElementById('convertButton');
let amount = document.getElementById('amountInput')
let result = document.getElementById('resultText');
let convertedAmount = 0;
let formatedAmount = ' '
let rateA = 0;
let rateB = 0;

//const ratePerUSD = {
 // "USD": 1,
 // "VND": 23333.5,
 // "GBP": 0.80870,
 // "KRW": 1224.11
//}


convertButton.addEventListener("click",convert);

// VND to USD

function vndToUsd() {
  return amount.value/ exchangeRate.toFixed(2)
  //console.log("your money in USD is ", convertedAmount);
}

//USD to VND

function usdToVnd(){
  return amount.value* exchangeRate.toFixed(2)
  //console.log("your money in VND is", convertedAmount);
}

// formatting currency

function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}


function convert (){
  
 
   if (from.value === 'VND' && to.value === 'USD'){
     convertedAmount = vndToUsd()
     formatedAmount = formatCurrency(to.value,convertedAmount)
     
   } else if (from.value === 'USD' && to.value === 'VND'){
     convertedAmount = usdToVnd()
     formatedAmount = formatCurrency(to.value,convertedAmount)
   
   } else {
     result.innerHTML = `Choose different converting currency`
     return; 
   }
   result.innerHTML = `You have ${formatedAmount}`
 }
 

 //function getRatePerUSD() {
 // for (let [key, value] of Object.entries(ratePerUSD)) {
 //     console.log(key, value)
 //     if (from === key) {rateA = value;}
 //     if (to === key) {rateB = value;}
  
 }

 //function convert2(){
  //convertedAmount = amount.value* rateB/rateA;
  //convertedAmount = convertedAmount.toFixed(2)
 // formatedAmount = formatCurrency(to.value,convertedAmount)

// }