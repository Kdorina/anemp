// const { result } = require("lodash");

const dowButton = document.querySelector("#dowButton")


dowButton.addEventListener('click' ,() => {
    console.log("Letöltés");
})

var url = "http://localhost:3000/employees";

fetch(url)
.then( (response) =>
     response.json()
.then( result => console.log(result[0].name ))
.catch(error => {
    console.log("Hiba! A lekérdezés sikertelen!");
    console.log(error);
})
);


// .then( result => result.json())
// .then( data => {
//     console.log(data);
// });