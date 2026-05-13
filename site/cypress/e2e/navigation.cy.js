describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to the Projects page", () => {
    cy.get('a[href="/projects"]').click();
    cy.url().should("include", "/projects");
    cy.get("#navigation-menu").contains("Projects").should("be.visible");
  });

  it("should navigate to the Guides page", () => {
    cy.get('a[href="/guides"]').click();
    cy.url().should("include", "/guides");
    cy.get("#navigation-menu").contains("Guides").should("be.visible");
  });

  it("should navigate back to the Home page", () => {
    cy.visit("/projects");
    cy.get('a[href="/"]').first().click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });
});
