const Organization = require("../organization/Organization");
const Item = require("../item/Item");
const { uuid } = require("uuidv4");

class Ong extends Organization {
  constructor(name, cnpj, address, city, state, telephone, site) {
    super(name, cnpj);
    this.id = this.id = uuid();
    this.address = address;
    this.city = city;
    this.state = state;
    this.telephone = telephone;
    this.site = site;
    this.itensList = [];
  }

  addItem(item) {
    if (item instanceof Item) {
      return this.itensList.push(item);
    } else {
      throw Error("Item should an instance of the Item class ");
    }
  }
}

module.exports = Ong;
