// 1. define amount
let amount = 100
// 2. define from currrency
let from = "USD"
// 3. define to currency 
let to = "VND"
//3-b.define currency ratio ()
let currrencyRatio ="23161.39"
// 4. define converting function
function convert (){
    let result = amount * currrencyRatio
    console.log(from, " to ",to," is ",result)
}
convert()
//4-a. amount * currency ratio = result
// 5. define result
