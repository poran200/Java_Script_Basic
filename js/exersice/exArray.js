const arry = arrayFromRange(1,10);
console.log(arry);

function  arrayFromRange(min ,max){
   const output =[];
   for(let i= min; i<= max ; i++){
       output.push(i);
   } 
   return output;    
}