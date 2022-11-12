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

//daca dau click pe o marca, apoi apas butonul de arata toate masinile
//si apoi apas pe aceeasi marca => nu mi mai filtreaza decat daca apas
//pe alta marca
buttonAllCars.addEventListener("click", (e) => {
  container.innerHTML = createRows(getAllCars(masini));
});

//vreau sa pun numai una din cele 2 limite de pret, dar nu merge
buttonPret.addEventListener("click", (e) => {
  let min = 0;
  if (inputDeLa.value !== null) {
    min = Number(inputDeLa.value);
  }

  let max = 99999;
  if (inputPanaLa !== null) {
    max = Number(inputPanaLa.value);
  }
  container.innerHTML = createRows(getCarsBetweenPrice(masini, min, max));
});
