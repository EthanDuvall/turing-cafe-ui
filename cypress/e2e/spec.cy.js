describe("empty spec", () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/reservations", {
      body: [
        { id: 1, name: "Christie", date: "12/29", time: "7:00", number: 12 },
        { id: 2, name: "Leta", date: "4/5", time: "7:00", number: 2 },
        { id: 3, name: "Pam", date: "1/21", time: "6:00", number: 4 },
        { id: 4, name: "Khalid", date: "5/9", time: "7:30", number: 7 },
      ],
    });
    cy.visit("http://localhost:3000/");
  });
  it("Can see Reservations", () => {
    cy.get(".resy-container")
      .should("be.visible")
      .children(".card")
      .should("have.length", 4);
  });
  it("Cards Should have Correct Information", () => {
    cy.get(".resy-container").first().contains("Christie");
    cy.get(".resy-container").last().contains("Khalid");
  });
  it("form Vaules should be updated ", () => {
    cy.get(".resy-form").get("input").first().type("Ethan");
    cy.get(".resy-form input").first().should("have.value", "Ethan");
  });
  it("should add a new reservation",() => {
    cy.get(".resy-form").get("input").eq(0).type("Ethan");
    cy.get(".resy-form").get("input").eq(1).type("9/4");
    cy.get(".resy-form").get("input").eq(2).type("12:00");
    cy.get(".resy-form").get("input").eq(3).type("1");
    cy.get(".resy-form").get("input").eq(4).click().click();
    cy.get('.resy-container').last().contains("Ethan")
  })
});
