describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load the home page", () => {
    cy.title().should("include", "mangila");
    cy.get("nav").should("be.visible");
    cy.get("#navigation-menu").should("be.visible");
    cy.get("main").should("be.visible");
    cy.get("footer").should("be.visible");
  });

  it("should have the correct navigation links", () => {
    cy.get('a[href="/"]').contains("Home").should("be.visible");
    cy.get('a[href="/projects"]').contains("Projects").should("be.visible");
    cy.get('a[href="/guides"]').contains("Guides").should("be.visible");
  });

  it("should display the hero section", () => {
    cy.get(".hero").should("be.visible");
    cy.get(".hero img").should("be.visible");
  });
});
