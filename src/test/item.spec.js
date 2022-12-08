const Item = require("../item/Item");
describe("Item", () => {
  let item;
  item = new Item("ItemTest", "Description-teste", 2);

  it("Should be defined", () => {
    expect(item).toBeDefined();
  });
});
