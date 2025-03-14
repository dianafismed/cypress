/// <references types="cypress" />

describe("Buscar dispositivos", () => {
  it("Buscar dispositivo especifico", () => {
    cy.request("GET", "https://api.restful-api.dev/objects/7").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.equal("7");
      }
    );
  });

  it("Buscar dispositivo inexistente", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/k",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.error).to.equal("Oject with id=k was not found.");
    });
  });

  it("Cadastrar dispositivo", () => {
    cy.request({
      method: "POST",
      url: "https://api.restful-api.dev/objects",
      body: {
        name: "Dispositivo Teste",
        data: {
          year: 2021,
          price: 1000,
          "CPU model": "Intel Core i7",
          "Hard disk size": "1TB",
          cor: "preto",
        },
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});