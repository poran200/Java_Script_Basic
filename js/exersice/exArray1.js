const arr = [1,3,4,5,6,7,7]


function scearch(array, scearchElement){
    for (const element of array) {
        if(element === scearchElement)
        return true;
    }
    return false;
}
 
console.log(scearch(arr,3));
 
function duplicate(arry, element){
    let count = 0;
    for(let e of arry){
       if(e === element){
        count++;
       }
    }
    return count;
}

console.log(duplicate(arr,7));

 const person = {
     name: '',
     get(){
         return name;
     }, 
     set(name){
       this.name = name;
     }  
 }