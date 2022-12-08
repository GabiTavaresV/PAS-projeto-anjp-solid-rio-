class OngList {
    constructor() {
      this.ongsList = [];
    }
  
    addList(ong) {
      this.ongsList.push(ong);
      return this.ongsList;
    }
  
    getOngByName(name) {
      const item = this.ongsList.find((item) => item.name == name);
      return item;
    }
  }
  
  module.exports = OngList;
  