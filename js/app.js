const form = document.querySelector("form");
let array = Array.from(form)
//console.log(array); Obtenemos los elementos de form como array


form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)===true) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
    alert('Los datos son inválidos');
  }
});

/*getting value*/



function validateCardDetails(element) {
  //escribe tu código aqui

const valueCard = document.getElementById('cn').value;
const valueExp = document.getElementById('exp').value;
const valueCvv = document.getElementById('cvv').value;
const valueName = document.getElementById('name').value;
console.log(valueCard);
console.log(valueExp);
console.log(valueCvv);
console.log(valueName);
validate(valueCard, valueExp, valueCvv, valueName);

valueExp = (expedCV) => {

  console.log(expedCV)
}


  let total = array.map((getArr) => {
    //arrojando nuevo array con los datos del input
    return getArr.value;
  });
 console.log(total);
 getValues(element)
}  
  /*var valueCard = total.filter()*/

  //validando Fecha de expedición


  const getValues = (array) => {


}
