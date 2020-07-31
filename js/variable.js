
let name = 'poran';
console.log(name);

// can not be resrved keyword
// should be meaningful
// can not start with a number
// cant not containt a space or hyphen(-)

let fristName = "jone";
//camele notatation


//constnat 
const intersRate = 30;
//intersRate = 1;
console.log(intersRate);

// primitive types
let  name1 = 'poran';// string 
let  age = 30; //Number
let isAproved= false;//Boolean 
// let fristName= undefined;
let lastName= null;

let person = {
    name : "jone",
    age : 23
};
//change property
person.name = "mizan"
// red value from object 
// dot notatation
 console.log(person.name);
 // bracket notation 
 console.log(person['age'])

// array 
let selcetedColor = ['red','blue'];
console.log(selcetedColor);
selcetedColor.push('green')
selcetedColor.slice(0,1);
console.log(selcetedColor[0]); 
console.log(selcetedColor.length);

// function 

function hello(massge){
    console.log('hello '+ massge);
}
hello('jone');

//calculate a value 
function square(number){
    return number*number;
}
let number = square(2);
console.log(number);

//oparator 
let x = 10;
//incriment oparator
x++;
//
x += 5;
x *=5;
// comparision oparator

let y = 1;
console.log(y> 0);
console.log(y< 0);
console.log(y<=0);
// equal oparator
console.log(y === 1);
console.log(y !==1);
// strict equality 
console.log(1 === 1);
//lose equality  b
console.log('1' == 1);

// ternary oparator 
let points = 110 ;
let type = points > 100 ?'gold' : 'silver';
console.log(type);


