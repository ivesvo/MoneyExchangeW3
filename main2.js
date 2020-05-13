// exchange rate
//const exchangeRate = 23333.5;

  

let from = document.getElementById('fromList')
let to = document.getElementById('toList')
let convertButton = document.getElementById('convertButton');
let amount = document.getElementById('amountInput')
let result = document.getElementById('resultText');
let convertedAmount = 0;
let formatedAmount = ''


convertButton.addEventListener("click",convert);

// // VND to USD

// function vndToUsd() {
//   return amount.value/ exchangeRate.toFixed(2)
//   //console.log("your money in USD is ", convertedAmount);
// }

// //USD to VND

// function usdToVnd(){
//   return amount.value* exchangeRate.toFixed(2)
//   //console.log("your money in VND is", convertedAmount);
// }

// formatting currency

function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}


// function convert (){
  
 
//    if (from.value === 'VND' && to.value === 'USD'){
//      convertedAmount = vndToUsd()
//      formatedAmount = formatCurrency(to.value,convertedAmount)
     
//    } else if (from.value === 'USD' && to.value === 'VND'){
//      convertedAmount = usdToVnd()
//      formatedAmount = formatCurrency(to.value,convertedAmount)
   
//    } else {
//      result.innerHTML = `Choose different converting currency`
//      return; 
//    }
//    result.innerHTML = `You have ${formatedAmount}`
//  }
 

const currencyRatio = {
  VND:{
    USD: 0.000043,
    KRW: 0.051,
    GBP: 0.0000349,
    VND: 1
  },
  USD: {
    USD: 1,
    KRW: 1225.68,
    GBP: 0.815202,
    VND: 23333.5
  },
  KRW: {
    USD: 0.00081590,
    KRW: 1,
    GBP: 0.000665130,
    VND: 19.47
  },
  GBP:{
    USD: 1.22673,
    KRW: 1503.47,
    GBP: 1,
    VND: 28615.8
  }

};

function getConversionRate(from,to) {
  return currencyRatio[from.value][to.value];
}


function convert(){
  convertedAmount = amount.value* currencyRatio[from.value][to.value]
  formatedAmount = formatCurrency(to.value,convertedAmount)
  result.innerHTML = `You have ${formatedAmount}`

}