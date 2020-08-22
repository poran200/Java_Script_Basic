console.log("Hello console........");
//  const axios = require('axios');

axios
  .get("https://swapi.dev/api/people/")
  .then((res) => {
    const person = res.data;
    //  console.log(person.results);
    person.results.forEach((element) => {
      console.log(element.name);
    });
    return axios.get(person.next);
  })
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
