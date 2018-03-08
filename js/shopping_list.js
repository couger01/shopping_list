let sl = new shoppingList();
let sv = new shoppingView(sl);

function clickedOn() {
  let name = document.querySelector("#item-name");
  let store = document.querySelector("#store-select");
  let price = document.querySelector("#price-input");
  let quantity = document.querySelector("#quantity-select");
  let section = document.querySelector("#section-select");
  let priority = document.querySelector("#priority-select");
  let item = new Item(name,store,price,quantity,section,priority);
  sl.addItem(item);
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
