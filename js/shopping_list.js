function addItem() {
  let name = document.querySelector("#item-name");
  let store = document.querySelector("#store-select");
  let price = document.querySelector("#price-input");
  let quantity = document.querySelector("#quantity-select");
  let section = document.querySelector("#section-select");
  //let priority = document.querySelector("#priority-select");

  let tbody = document.querySelector("#item-table-body");
  let tr = document.createElement("tr");

  let nametd = document.createElement("td");
  let storetd = document.createElement("td");
  let pricetd = document.createElement("td");
  let quantitytd = document.createElement("td");
  let sectiontd = document.createElement("td");
  //let prioritytd = document.createElement("td");
  nametd.innerHTML = name.value;
  storetd.innerHTML = store.value;
  pricetd.innerHTML = price.value;
  quantitytd.innerHTML = quantity.value;
  sectiontd.innerHTML = section.value;
  //prioritytd.innerHTML = priority.value;
  tr.appendChild(nametd);
  tr.appendChild(quantitytd);
  tr.appendChild(storetd);
  tr.appendChild(sectiontd);
  tr.appendChild(pricetd);


  //tr.appendChild(prioritytd);
  tbody.appendChild(tr);
}

function addData() {
  let storeArray = ["Decorah Mart","Walmart", "Fareway"];
  let sectionArray = ["Food","Misc"];
  let storeSelect = document.querySelector("#store-select");
  let sectionSelect = document.querySelector("#section-select");
  for (store of storeArray) {
    let opt = document.createElement("option")
    opt.value = store;
    opt.innerHTML = store;
    storeSelect.appendChild(opt);
  }
  for (section of sectionArray) {
    let opt = document.createElement("option")
    opt.value = section;
    opt.innerHTML = section;
    sectionSelect.appendChild(opt);
  }
}
addData();
