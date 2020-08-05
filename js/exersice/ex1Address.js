 let address = {
     street: 'a',
     city: 'b',
      zipcode:'c'
 };
   

 function showAddressProperties(address){
      for (const key in address) {
          if (address.hasOwnProperty(key)) {
              const element = address[key];
              console.log(key,element);
          }
      }
 }
 showAddressProperties(address);