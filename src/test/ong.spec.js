const Item = require("../item/Item");
const Ong = require("../ong/Ong");

describe("Ong", () => {
  let ong = new Ong(
    "Ong-Teste",
    125633,
    "Avenida Teste",
    "Cidade Teste",
    "Estado Teste",
    123456,
    "www.teste.com"
  );

  it("Should be defined Ong Class", () => {
    expect(ong).toEqual(
      expect.objectContaining({
        name: "Ong-Teste",
      })
    );
  });

  it("Should return an error when the item is not an instance of the Item Class", () => {
    expect(() => ong.addItem("item")).toThrow(
      "Item should an instance of the Item class "
    );
  });

  it("Should add an item to an ong", () => {
    const item = new Item("Arroz", "Para o almoço de final de ano", 50);
    expect(ong.addItem(item)).toBe(1);
  });
});
