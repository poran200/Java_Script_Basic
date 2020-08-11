const arr = [1,3,4,5,6,7,7]


function scearch(array, scearchElement){
    for (const element of array) {
        if(element === scearchElement)
        return true;
    }
    return false;
}

console.log(scearch(arr,3));
 
