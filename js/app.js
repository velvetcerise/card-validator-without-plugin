const form = document.querySelector("form");
let array = Array.from(form)
//console.log(array); Obtenemos los elementos de form como array


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
  let total = array.map((uno) => {
    //arrojando nuevo arrat con los datos del input
    return uno.value;
  })
  //total.forEach((inputValue, whatweGot) =>{

  //});

  console.log(total);
  getValues(element)

}

let valueCard = document.getElementById('cn').value;
let valueExp = document.getElementById('exp').value;
let valueCvv = document.getElementById('cvv').value;
let valueName = document.getElementById('name').value;
console.log(inputValue);


  const getValues = (array) => {


}
