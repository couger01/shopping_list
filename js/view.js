class shoppingView {
  constructor(model) {
    let self = this;
    model.subscribe( function(a,b) {
      self.redrawTable(a,b);
    })
  }
  redrawTable(sl, msg) {
    let tbl = document.querySelector("#item-table-body");
    tbl.innerHTML = "";
    for (let item of sl.items) {
      this.addRow(item,tbl)
    }
  }
  addRow(item, parent) {
    let row = document.createElement("tr");
    //row.classList.add(item.priority);
    let cbtd = document.createElement("td");
    let cb = document.createElement("input");
    cb.type = "checkbox";
    cb.classList.add("form-control-checkbox");
    cbtd.appendChild(cb);
    row.appendChild(cbtd);
    for (let val of ['name','quantity','store','section','price']) {
      let td = document.createElement("td");
      td.innerHTML = item[val].value;
      row.appendChild(td);
    }
    parent.appendChild(row);
  }
  clearTable() {
    let tbody = document.querySelector("#item-table-body");
  }
}
