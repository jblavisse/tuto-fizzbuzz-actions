describe("fizzbuzz", () => {
  it("should display fizz or buzz or fizzbuzz", () => {
    cy.visit("http://localhost:5173");

    cy.get("#nb").type(10);
    cy.get("#btn").click();
    cy.get("#title").contains("buzz");

    cy.get("#nb").clear().type(3);
    cy.get("#btn").click();
    cy.get("#title").contains("fizz");

    cy.get("#nb").clear().type(15);
    cy.get("#btn").click();
    cy.get("#title").contains("fizzbuzz");

    cy.get("#nb").clear().type(8);
    cy.get("#btn").click();
    cy.get("#title").contains("8");
  });
});
