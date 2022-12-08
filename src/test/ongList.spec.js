const OngList = require("../ong/OngList");
const Ong = require("../ong/Ong");

describe("OngList", () => {
  let ongList = new OngList();

  it("Should be defined", () => {
    expect(ongList).toBeDefined();
  });

  it("Should be defined", () => {
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

  it("Should be defined", () => {
    const mock = { getOngByName: jest.fn() };
    const resultMock = mock.getOngByName.mockReturnValue({
      name: "Creche Maria Claro",
      cnpj: 566789000145,
      id: "f9d85c83-cf32-41b9-bca2-693ce8045802",
      address: "Rua Maria Claro - 45",
      city: "Sorocaba",
      state: "SP",
      telephone: 1533256987,
      site: "www.mariaclaro.com.br",
      itensList: [
        { nameItem: "Arroz", description: "Comida", amount: "100kg" },
      ],
    });
    expect(resultMock).toHaveProperty("name");
  });
});
