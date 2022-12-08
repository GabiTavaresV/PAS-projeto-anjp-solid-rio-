const Organization = require("../organization/Organization");

describe("Organization", () => {
  let organization;
  organization = new Organization("OrganizationTeste", 111111111111);

  it("Should be defined", () => {
    expect(organization).toBeDefined();
  });
});
