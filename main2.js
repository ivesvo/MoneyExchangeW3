// exchange rate
const exchangeRate = 223161.39;
let moneyCurrency = prompt("VND or USD?")
let amount = prompt("How much do you have?")


//VND to USD
function vndToUsd(amount) {
    return convertedAmount = (amount/ exchangeRate).toFixed(2)
    
}

//USD to VND
function usdToVnd(amount){
    return convertedAmound = (amount* exchangeRate).toFixed(2)

}

if (moneyCurrency.toUpperCase() === 'VND' ){
   result = vndToUsd(amount)
   alert(result)

} else if (moneyCurrency.toUpperCase() === 'USD'){
   result =  usdToVnd(amount)
   alert(result)
   

}

function validate(moneyCurreny, amount){
    if (moneyCurrency === "VND "){
        alert(amount + " " + moneyCurrency + " to ")
    }

}



//Milestone 7
function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }