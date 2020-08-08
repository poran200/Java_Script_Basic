const numbers = [1,2,3];
// end
numbers.push(5,6);
console.log(numbers);

numbers.unshift(1,12);
console.log(numbers);

// find element 
console.log( numbers.indexOf(2));
//
// find elements and  refarence 
const courses =[
    {id:1, name: 'a'},
    {id:2, name: 'b'}
];

 const found =courses.find(function(course){
   return course.name === 'a'; 
});
console.log(found);


// arrow function 
const arrow = courses.findIndex((course => course.name ==='a'));  
console.log(arrow);


const numbers1 = [1,5];
console.log([...numbers1]);
 