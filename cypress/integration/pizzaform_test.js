import { boolean } from "yup";

describe("Testing our pizza form", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3000/pizza");
  });
  it("Adding text to text box", () => {
    cy.get("#name").type("Kyle Nelson");
  });
  it("Checks for toppings", () => {
    cy.get('#pepperoni').check().should("be.checked");
    cy.get('#jalapenos').check().should("be.checked");
    cy.get('#mushrooms').check().should("be.checked");
    cy.get('#olives').check().should("be.checked"); 
  });
  it("Checks for form submission", () => {
    cy.get('.pizza-form').submit();  
  })
 
    
});
