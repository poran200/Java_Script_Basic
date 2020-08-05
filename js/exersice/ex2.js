let address = {
    street: 'a',
    city: 'b',
     zipcode:'c'
};

/// factory function 
function createAddress(street, city, zipCode){
    return{
        street,
        city,
        zipCode

    };
}

// constructor function 
 function Address(street,city , zipcode){
     this.street= street;
     this.city = city;
     this.zipcode= zipcode; 
 }