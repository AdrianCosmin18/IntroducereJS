//todo:functie de afisare

function afisare(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//5 funnctii

//masina cu cel mai mare pret
function mostExpensiveCar(arr) {
  let carMaxPrice = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].pret > carMaxPrice.pret) {
      carMaxPrice = arr[i];
    }
  }
  return carMaxPrice;
}

//obtine masina pe baza modelului
function getCarByModel(model, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].model == model) {
      return arr[i];
    }
  }
  return "Nu exista masina cu acest model";
}

//lista cu masini cu pret mai mare de x
function getCarsMoreExpensiveThenPrice(x, arr) {
  let v = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].pret >= x) {
      v.push(arr[i]);
    }
  }
  return v;
}

//obtine lista cu masini disponibile
function getAvailableCars(arr) {
  let v = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].disponibila == true) {
      v.push(arr[i]);
    }
  }
  return v;
}

//numele masinilor dupa un anumit sasiu
function getCarNameByVIN(vin, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].sasiu === vin) {
      return arr[i].marca + " " + arr[i].model;
    }
  }
}

function describe(car) {
  let text = "<tr>";
  text += "<th scope='row'>" + car.id + "</th>";
  text += "<td>" + car.marca + "</td> ";
  text += "<td>" + car.model + "</td> ";
  text += "<td>" + car.an + "</td> ";
  text += "<td>" + car.disponibila + "</td> ";
  text += "<td>" + car.pret + "</td>";

  return text;
}

function createRow(car) {
  return `
   <tr>
        <th>${car.id}</th>
        <td>${car.marca}</td>
        <td>${car.model}</td>
        <td>${car.sasiu}</td>
        <td>${car.an}</td>
        <td>${car.disponibila}</td>
        <td>${car.pret}</td>  
    </tr>
    `;
}

function createRows(arr) {
  let text = "";
  arr.forEach((e) => {
    text += createRow(e);
  });
  return text;
}

//functie care ret un vect cu toate modelele o singura data
function getDistinctMarca(arr) {
  let v = [];
  v.push("Toate");
  for (let i = 0; i < arr.length; i++) {
    if (v.includes(arr[i].marca) === false) {
      v.push(arr[i].marca);
    }
  }

  return v;
}

function createOption(marca) {
  return `
    <option value="${marca}">${marca}</option>
  `;
}

function createFilterOptions(listaMarci) {
  let text = "";
  listaMarci.forEach((marca) => {
    text += createOption(marca);
  });
  return text;
}

//functie ce primeste  un array si marca =>array cu masinile ce au marca resp
function createFilterArrayByMarca(arr, marca) {
  let v = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].marca === marca) {
      v.push(arr[i]);
    }
  }
  return v;
}

function getAllCars(arr) {
  let v = [];
  for (let i = 0; i < arr.length; i++) {
    v.push(arr[i]);
  }
  return v;
}

function getCarById(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return arr[i];
    }
  }
  return console.error("Eroare: nu exsita nicio masina cu acest id");
}

function getCarsBetweenPrice(arr) {
  let v = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].pret >= inputDeLa.value && arr[i].pret <= inputPanaLa.value) {
      v.push(arr[i]);
    }
  }
  return v;
}

function getAvailbaleCars(arr) {
  let v = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].disponibila === true) {
      v.push(arr[i]);
    }
  }
  if (v.length > 0) {
    return v;
  } else {
    console.error("There is no available car !");
  }
}

function deleteCarByVIN(arr, vin) {
  return arr.filer((e) => e.vin != vin);
}

//inputMarca, inputModel, inputSasiu, inputAn, inputDisp, inputPret
function resetCar() {
  inputMarca.value = "";
  inputModel.value = "";
  inputSasiu.value = "";
  inputAn.value = "";
  inputDisp.checked = false;
  inputPret.value = "";
}

function checkIfMinIsBiggerThenMax() {
  if (inputDeLa.value == 0) {
    return false;
  }
  if (inputDeLa.value > inputPanaLa.value) {
    return true;
  }
  return false;
}
