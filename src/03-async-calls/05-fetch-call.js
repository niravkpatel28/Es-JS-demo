// fetch data from json placeholder

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("data", typeof data);
    return data[0];
  })
  .then((first) => {
    console.log("First", first);
  })
  .catch((err) => {
    console.log("Error");
  });
