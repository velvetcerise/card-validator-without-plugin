const form = document.querySelector("form");
let array = Array.from(form)

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)===true) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});

function validateCardDetails(element) {
  //escribe tu código aqui
  var total = array.map((uno) => {
    return uno.value;
  });
  console.log(total);
  getValues(element)
}

var valueCredit = 
  console.log(array);
  const getValues = (array) => {

}
