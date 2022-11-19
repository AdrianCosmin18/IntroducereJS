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

let inputUpdateByVIN = document.querySelector(".updateByVIN");
let inputDispModificare = document.querySelector(".disponibilitateModificare");
let inputPretModificare = document.querySelector(".pretModificare");
let inputModelModificare = document.querySelector(".modelModificare");
let inputMarcaModificare = document.querySelector(".marcaModificare");
let inputAnModificare = document.querySelector(".anModificare");
let buttonUpdateByVin = document.querySelector(".btn-update-vin");

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
  masini = deleteCarByVIN(masini, vinToBeDelete);
  container.innerHTML = createRows(masini);
});

buttonUpdateByVin.addEventListener("click", (e) => {
  let vin = inputUpdateByVIN.value;
  let disp = inputDispModificare.value;
  let marca = inputMarcaModificare.value;
  let model = inputModelModificare.value;
  let an = inputAnModificare.value;
  let pret = inputPretModificare.value;

  let dispBool = false;
  if (disp === "da") {
    dispBool = true;
  }
  masini = updateCarByVin(masini, vin, dispBool, pret, model, marca, an);
  container.innerHTML = createRows(masini);
});

container.addEventListener("click", (e) => {
  let obj = e.target; //imi indica cine a trigaruit eventul

  //type-ul/tag-ul elemetului
  if (obj.tagName == "BUTTON") {
    let model = obj.classList[2];
    masini = deleteCarByModel(masini, model);
    container.innerHTML = createRows(masini);
  }
});

container.addEventListener("click", (e) => {
  let obj = e.target;
  if (obj.classList.contains("car")) {
    let id = obj.classList[1].substr(obj.classList[1].length - 1);
    console.log(id);
    masina = getCarById(masini, Number(id));
    let sasiu = masina.sasiu;
    inputUpdateByVIN.value = sasiu;
    inputAnModificare.value = masina.an;
    inputModelModificare.value = masina.model;
    inputMarcaModificare.value = masina.marca;
    inputPretModificare.value = masina.pret;

    if (masina.pret) {
      inputDispModificare.value = "da";
    } else {
      inputDispModificare.value = "nu";
    }
  }
});
