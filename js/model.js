class Subject {
  constructor() {
    this.handlers = [];
  }
  subscribe(fn) {
    this.handlers.push(fn);
  }
  unsubscribe(fn) {
    this.handlers = this.handlers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
  }
  publish(msg, someobj) {
    var scope = someobj || window;
    for (let fn of this.handlers) {
      fn(scope, msg)
    }
  }
}

class Item {
  constructor(name,store,price,quantity,section,priority) {
    this.name = name;
    this.store = store;
    this.price = price;
    this.quantity = quantity;
    this.section = section;
    this.priority = priority;

    this._purchased = false;
  }

  get purchased() {
    return this._purchased;
  }

  set purchased(nv) {
    this._purchased = nv;
    alert(`${this.name} was purchased`)
  }
}

class shoppingList extends Subject {
  constructor() {
    super();
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
    this.publish("New Item",this);
  }
}
