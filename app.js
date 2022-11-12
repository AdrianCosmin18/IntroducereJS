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

container.innerHTML = createRows(masini);
filterMarca.innerHTML = createFilterOptions(getDistinctMarca(masini));

//vreau sa verific daca campurile sunt ok inainte de pot da Adauga
//vreau sa dispara inputul dat de user dupa ce-l adauga in lista
//de ce nu apare in lista de masini dupa ce am dat add ?
buttonAddCar.addEventListener("click", (e) => {
  //user apeleaza metoda printr-un event
  let masina = {
    marca: inputMarca.value,
    model: inputModel.value,
    sasiu: inputSasiu,
    an: inputAn.value,
    disponibila: inputDisp.checked,
    pret: inputPret.value,
  };
  masini.push(masina);
  container.innerHTML = createRows(masini);
});

filterMarca.addEventListener("change", (e) => {
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
