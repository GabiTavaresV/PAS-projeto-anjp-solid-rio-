const OngList = require("../ong/OngList");

describe("OngList", () => {
  let ongList = new OngList();

  it("Should be defined OngList Class", () => {
    expect(ongList).toBeDefined();
  });

  it("Should add an ong to the list of ongs ", () => {
    const ong = {
      name: "OngTeste",
      cnpj: 11111,
      address: "Rua Teste",
      city: "Cidade Teste",
      state: "Estado Teste",
      telephone: 111111,
      site: "www.teste.com",
    };

    expect(ongList.addList(ong)).toEqual([
      {
        address: "Rua Teste",
        city: "Cidade Teste",
        cnpj: 11111,
        name: "OngTeste",
        site: "www.teste.com",
        state: "Estado Teste",
        telephone: 111111,
      },
    ]);
  });
});
