class OngList {
  constructor() {
    this.ongsList = [];
  }

  addList(ong) {
    this.ongsList.push(ong);
    return this.ongsList;
  }

  getOngByName(name) {
    const ongByName = this.ongsList.find((item) => item.name == name);
    return ongByName;
  }

}

module.exports = OngList;
