console.log("Hi Ajax........");
fetch("https://swapi.dev/api/people/")
  .then((respon) => {
    console.log(respon);
    respon.json().then((data) => {
      console.log(data);
    });
  })

  .catch((err) => {
    console.log(err);
  });
