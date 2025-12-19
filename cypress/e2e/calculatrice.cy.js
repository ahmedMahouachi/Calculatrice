describe('Addition', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
  })
 
  it("Addition valide", () => {
    cy.get("#a").type(5)
    cy.get("#b").type(3)
    cy.contains('button', '+').click();
 
    cy.get('#result').should("contain", 8)
  })
 
  it("Addition avec un seul chiffre", () => {
    cy.get("#a").type(5)
    cy.contains('button', '+').click();
 
    cy.get('#result').should("contain", "—")
    cy.get('#error').should("contain", "Both a and b must not be empty")
  })
 
  it("Addition avec un chiffre et un mot", () => {
    cy.get("#a").type(5)
    cy.get("#b").type("un")
    cy.contains('button', '+').click();
 
    cy.get('#result').should("contain", "—")
    cy.get('#error').should("contain", "Both a and b must be valid numbers")
  })
})
 
describe('Soustraction', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
  })
 
  it("Soustraction valide", () => {
    cy.get("#a").type(5)
    cy.get("#b").type(3)
    cy.contains('button', '−').click();
 
    cy.get('#result').should("contain", 2)
  })
 
  it("Soustraction avec un seul chiffre", () => {
    cy.get("#a").type(5)
    cy.contains('button', '−').click();
 
    cy.get('#result').should("contain", "—")
    cy.get('#error').should("contain", "Both a and b must not be empty")
  })
 
  it("Soustraction avec un chiffre et un mot", () => {
    cy.get("#a").type(5)
    cy.get("#b").type("un")
    cy.contains('button', '−').click();
 
    cy.get('#result').should("contain", "—")
    cy.get('#error').should("contain", "Both a and b must be valid numbers")
  })
})
 
describe('Multiplication', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
  })
 
  it("Multiplication valide", () => {
    cy.get("#a").type(5)
    cy.get("#b").type(3)
    cy.contains('button', '×').click();
 
    cy.get('#result').should("contain", 15)
  })
 
  it("Multiplication avec un seul chiffre", () => {
    cy.get("#a").type(5)
    cy.contains('button', '×').click();
 
    cy.get('#result').should("contain", "—")
    cy.get('#error').should("contain", "Both a and b must not be empty")
  })
 
  it("Multiplication avec un chiffre et un mot", () => {
    cy.get("#a").type(5)
    cy.get("#b").type("un")
    cy.contains('button', '×').click();
 
    cy.get('#result').should("contain", "—")
    cy.get('#error').should("contain", "Both a and b must be valid numbers")
  })
})
 
describe('Division', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
  })
 
  it("Division valide", () => {
    cy.get("#a").type(15)
    cy.get("#b").type(3)
    cy.contains('button', '÷').click();
 
    cy.get('#result').should("contain", 5)
  })
 
  it("Division avec un seul chiffre", () => {
    cy.get("#a").type(5)
    cy.contains('button', '÷').click();
 
    cy.get('#result').should("contain", "—")
    cy.get('#error').should("contain", "Both a and b must not be empty")
  })
 
  it("Division avec un chiffre et un mot", () => {
    cy.get("#a").type(5)
    cy.get("#b").type("un")
    cy.contains('button', '÷').click();
 
    cy.get('#result').should("contain", "—")
    cy.get('#error').should("contain", "Both a and b must be valid numbers")
  })
 
  it("Division par 0", () => {
    cy.get("#a").type(5)
    cy.get("#b").type(0)
    cy.contains('button', '÷').click();
 
    cy.get('#result').should("contain", "—")
    cy.get('#error').should("contain", "Division by zero")
  })
})


describe('Puissance', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
  })
 
  it("Puissance valide", () => {
    cy.get("#a").type(5)
    cy.get("#b").type(3)
    cy.contains('button', '^').click();
 
    cy.get('#result').should("contain", 125)
  })
 
  it("Puiisance avec un seul chiffre", () => {
    cy.get("#a").type(5)
   cy.contains('button', '^').click();
 
    cy.get('#result').should("contain", "—")
    cy.get('#error').should("contain", "Both a and b must not be empty")
  })
 
  it("Puiisance avec un chiffre et un mot", () => {
    cy.get("#a").type(5)
    cy.get("#b").type("un")
    cy.contains('button', '^').click();
 
    cy.get('#result').should("contain", "—")
    cy.get('#error').should("contain", "Both a and b must be valid numbers")
  })
})