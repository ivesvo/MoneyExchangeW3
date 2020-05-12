// exchange rate
const exchangeRateUsd = 22316.5;
// const exchangeRateGp= 28819.18;
let from = document.getElementById('fromList')
let to = document.getElementById('toList')
let convertButton = document.getElementById('convertButton');
let amount = document.getElementById('amountInput')
let result = document.getElementById('resultArea');
let convertedAmount = 0;
let formatedAmount = ' '





convertButton.addEventListener("click",convert);



//VND to USD
function vndToUsd() {
    return amount.value/ exchangeRateUsd.toFixed(2)
    
    
}


//USD to VND
function usdToVnd(){
   return amount.value* exchangeRateUsd.toFixed(2)

}

//VND to Gp
//function vndToGp(){
//  return amount/ exchangeRateGp.toFixed(2)
//}

//GP to VND
//function GpToVnd(){
 // return amount/ exchangeRateGp.toFixed(2)
//}





function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}

function convert (){
 // from = from.toUpperCase();
 // to = to.toUpperCase();

  if (from.value === 'VND' && to.value === 'USD'){
    convertedAmount = vndToUsd()
    formatedAmount = formatCurrency(to.value,convertedAmount)
    
  } else if (from.value === 'USD' && to.value === 'VND'){
    convertedAmount = usdToVnd()
    formatedAmount = formatCurrency(to.value,convertedAmount)
  

  } else {
    alert('Wrong currency')
    return; 
  }
  result.innerHTML = `You have ${formatedAmount}`
}





