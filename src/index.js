const OngList = require("./ong/OngList");
const Ong = require("./ong/Ong");
const Item = require("./item/Item");

const ong1 = new Ong(
  "Creche Maria Claro",
  566789000145,
  "Rua Maria Claro - 45",
  "Sorocaba",
  "SP",
  1533256987,
  "www.mariaclaro.com.br"
);

const ong2 = new Ong(
  "Lar São Vicente",
  456789000145,
  "Rua Roberto Garcia - 101",
  "Sorocaba",
  "SP",
  1532568974,
  "www.larsaovicente.com.br"
);

const ongsList = new OngList();

ongsList.addList(ong1);
ongsList.addList(ong2);

const item1 = new Item("Arroz", "Comida", "100kg");
const item2 = new Item("Fralda", "Tamanho P,M e G", "50");

ong1.addItem(item1);
ong1.addItem(item2);

console.log(ong1);

console.log(ongsList.getOngByName("Creche Maria Claro"));
