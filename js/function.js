function walk(){
    console.log('walk');
}

//  anynumous function 
let run = function (massge){
    console.log("hello "+ massge);
}

run('poran');

/// rest oparator 
function sum(discount,...prices){
     let  total = prices.reduce((a,b) => a+b );
     return total *(1- discount);   
}
console.log(sum(0.1,20,30));
// defult value
function interest(principal, years ,rate = 3.5){
    return principal * rate /100 *years;
}

