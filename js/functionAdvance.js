  function outter() {
     let name = 'Jone doe';
     function inner(name){
         console.log(name.toUpperCase());
     }
     inner(name);
 }

outter();
// Higher order function 
function callTwoDice(func){
    func();
    func();
}

function laugh(){
    console.log("ha ha");
}
//Call back function
callTwoDice(laugh);
 
 const btn = document.querySelector('button');
  btn.addEventListener('click',onTest);

function onTest(){
    console.log('Button click');
}  

const nambers = [1,2,3,4,5,6,7,8,9];

nambers.forEach((data,index)=>{
    console.log(index, data);
}); 
 const odd = nambers.map((n)=>{
    return {
        value: n,
        isEven:n % 2 ===0 
    }
 });
 console.log(odd);
 
 const even = nambers.filter(n => {
     return n % 2 ===0;
 });
 console.log(even);
  