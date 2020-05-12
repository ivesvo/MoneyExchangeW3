// exchange rate
const exchangeRateUsd = 223161;
const exchangeRateGp= 28819.18;
let from = prompt ('Which currency you have?')
let to = prompt ('Which currency you want?')
let amount = prompt ('How much you want to convert')
let result = 0;
let formatedAmount = ' '



//VND to USD
function vndToUsd() {
    return amount/ exchangeRateUsd.toFixed(2)
    
}

//USD to VND
function usdToVnd(){
   return amount* exchangeRateUsd.toFixed(2)

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
  from = from.toUpperCase();
  to = to.toUpperCase();

  if (from === 'VND' && to === 'USD'){
    result = vndToUsd()
    formatedAmount = formatCurrency(to,result)
    
  } else if (from === 'USD' && to === 'VND'){
    result = usdToVnd()
    formatedAmount = formatCurrency(to,result)
  

  } else {
    alert('Wrong currency')
    return; 
  }
    alert('You have:' + formatedAmount);
}

convert()





