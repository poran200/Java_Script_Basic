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
 function getrandom(){
   return  Math.floor(Math.random() *5);
 }

//  for(let i =0; i<5; i++){
//      console.log(getrandom());
//  } 

function passwordValidator(password){
   if(password.length < 8 || password.indexOf(' ') !== -1){
       return false;
   }
    return true;
}

console.log(passwordValidator("heljavascript"))

function pangramCheck(sentence){
     const lowerCase = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
         if(lowerCase.indexOf(char) ==-1){
             return false;
         }

    }
    return true;
}

console.log(pangramCheck('abcdefghijklmnopqrstuvwx'));