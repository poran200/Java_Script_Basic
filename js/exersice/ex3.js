function Address(street,city , zipcode){
    this.street= street;
    this.city = city;
    this.zipcode= zipcode; 
}

let address1 = new Address('a','b','d');
let address2 = new Address('a','b','c');

function  areEqual(address1, address2){
      return address1.street === address2.street &&
       address1.city === address2.city &&
       address1.zipcode === address2.zipcode
 }

 function areSame(addres1, address2){
     return addres1 === address2;
 }

console.log(areEqual(address1,address2));
