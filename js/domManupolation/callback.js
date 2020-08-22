// const newPromise = new Promise((resolve, reject)=>{
//  const rand = Math.random();
//  if(rand < 0.5){
//      resolve();
//  }
//  else{
//      reject();
//  }
// });

const makePromise = () => {
  return new Promise((resolve, reject) => {
      setTimeout(()=>{
        const rand = Math.random();
        if (rand < 0.5) {
          resolve();
        } else {
          reject();
        }
      },2000);
  });
};

makePromise()
  .then(() => {
    console.log("Problem resolve");
  })
  .catch(() => {
    console.log("reject");
  });
 
