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
        <th type="id" class="car car-${car.id}">${car.id}</th>
        <td>${car.marca}</td>
        <td>${car.model}</td>
        <td>${car.sasiu}</td>
        <td>${car.an}</td>
        <td>${car.disponibila}</td>
        <td>${car.pret}</td>  
        <td><button type="button" class="btn btn-danger ${car.model}" style="grid-area: btn;">Delete</button>
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
  let v = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].sasiu !== vin) {
      v.push(arr[i]);
    }
  }
  return v;
}

function deleteCarByModel(arr, model) {
  let v = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].model.includes(model)) {
      v.push(arr[i]);
    }
  }
  return v;
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

function updateCarByVin(
  arr,
  sasiu,
  nouDisponibila,
  nouPret,
  nouModel,
  nouMarca,
  nouAn
) {
  let v = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].sasiu === sasiu) {
      masina = arr[i];
      masina.disponibila = nouDisponibila;
      masina.pret = nouPret;
      masina.model = nouModel;
      masina.marca = nouMarca;
      masina.an = nouAn;
      v.push(masina);
    } else {
      v.push(arr[i]);
    }
  }
  return v;
}

//sortare dupa marca
function sortare(arr, criteriu) {
  let schimb, aux;
  do {
    schimb = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i][`${criteriu}`] > arr[i + 1][`${criteriu}`]) {
        aux = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = aux;
        schimb = true;
      }
    }
  } while (schimb);
  return arr;
}
