let container = document.querySelector(".table-container"); //trans un tag din html in js
let filterMarca = document.querySelector(".marca-select");
let inputMarca = document.querySelector(".inputMarca");
let inputModel = document.querySelector(".inputModel");
let inputSasiu = document.querySelector(".inputSasiu");
let inputAn = document.querySelector(".inputAn");
let inputDisp = document.querySelector(".inputDisp");
let inputPret = document.querySelector(".inputPret");
let buttonAddCar = document.querySelector(".btn-success");
let inputId = document.querySelector(".id-input");
let buttonId = document.querySelector(".btn-danger");
let buttonAllCars = document.querySelector(".btn-primary");
let inputDeLa = document.querySelector(".deLa-input");
let inputPanaLa = document.querySelector(".panaLa-input");
let buttonPret = document.querySelector(".btn-pret");
let checkBoxAvailableCars = document.querySelector(".checkboxAvailableCars");
let inputDeleteByVIN = document.querySelector(".deleteByVIN");
let buttonDeleteVIN = document.querySelector(".btn-delete-vin");
let sasiuUpdate = document.querySelector(".updateByVIN");
let disponibilaUpdate = document.querySelector(".disponibilitateModificare");
let pretModificare = document.querySelector(".pretModificare");

container.innerHTML = createRows(masini);
filterMarca.innerHTML = createFilterOptions(getDistinctMarca(masini));

buttonAddCar.addEventListener("click", (e) => {
  //user apeleaza metoda printr-un event
  let masina = {
    marca: inputMarca.value,
    model: inputModel.value,
    sasiu: inputSasiu.va,
    an: inputAn.value,
    disponibila: inputDisp.checked,
    pret: inputPret.value,
  };
  masini.push(masina);
  container.innerHTML = createRows(masini);
  resetCar();
});

filterMarca.addEventListener("click", (e) => {
  if (createFilterArrayByMarca(masini, filterMarca.value).length === 0) {
    container.innerHTML = createRows(getAllCars(masini));
  } else {
    container.innerHTML = createRows(
      createFilterArrayByMarca(masini, filterMarca.value)
    );
  }
});

buttonId.addEventListener("click", (e) => {
  let id = Number(inputId.value);
  container.innerHTML = createRow(getCarById(masini, id));
});

buttonAllCars.addEventListener("click", (e) => {
  container.innerHTML = createRows(getAllCars(masini));
});

buttonPret.addEventListener("click", (e) => {
  if (checkIfMinIsBiggerThenMax()) {
    console.error("EROARE: pret minim mai mare decat pret maxim");
  } else {
    container.innerHTML = createRows(getCarsBetweenPrice(masini));
  }
});

checkBoxAvailableCars.addEventListener("change", (e) => {
  if (e.target.checked === true) {
    container.innerHTML = createRows(getAvailableCars(masini));
  } else {
    container.innerHTML = createRows(getAllCars(masini));
  }
});

//nu se realizeaza stergerea din cauza functiei deleteCarByVIN
buttonDeleteVIN.addEventListener("click", (e) => {
  let vinToBeDelete = inputDeleteByVIN.value;
  container.innerHTML = createRows(deleteCarByVIN(masini, vinToBeDelete));
});
