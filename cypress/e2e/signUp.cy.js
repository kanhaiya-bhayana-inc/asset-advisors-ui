import { faker } from "@faker-js/faker";
import { wait } from "@testing-library/user-event/dist/utils";

describe("Sign Up Advisor and Log Him In", () => {
  it("", () => {
    cy.viewport(1280,720)
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const phone = faker.phone.number("##########");
    const email = faker.internet.email();
    const address = faker.address.streetAddress().split(" ")[0];
    const city = faker.address.city();
    const state = faker.address.state();
    const pass = "AssetAdvisor@1";

    const credentials = { username: email, password: pass };
    cy.writeFile("cypress/fixtures/credentials.json", credentials);

    cy.visit("https://proud-sky-0b36e9d0f.2.azurestaticapps.net/");

    //CEHCK FOR GET STARTED BUTTON
    cy.contains("Get Started").should("be.visible");

    cy.get(".btn").click();

    cy.contains("Create a new Account").should("be.visible");
    cy.get(":nth-child(1) > :nth-child(1) > .form-control").type(firstName);
    cy.get(":nth-child(2) > .form-control").type(lastName);
    cy.get(":nth-child(2) > .col-lg-7 > .form-control").type(phone);
    cy.get(":nth-child(3) > .col-lg-7 > .form-control").type(email);
    cy.get(":nth-child(4) > .col-lg-7 > .form-control").type("Incedo");
    cy.get(":nth-child(5) > .col-lg-7 > .form-control").type(address);
    cy.get(":nth-child(6) > .col-lg-7 > .form-control").type(state);
    cy.get(':nth-child(7) > .col-lg-7 > .form-control').type(city);
    cy.get(":nth-child(8) > .col-lg-7 > .form-control").type(pass);
    cy.get(":nth-child(9) > .col-lg-7 > .form-control").type(pass);

    cy.intercept("POST", "/add-user").as("apiRequest");

    cy.get(".btn").click({ force: true });

    cy.wait("@apiRequest").then((interception) => {
      console.log("BOdy " + interception.response);
      const responseBody = interception.response.body;
      let verificationToken = responseBody.verificationToken;

      cy.wrap(verificationToken).as("verificationToken");
      console.log(verificationToken);

      cy.visit("https://proud-sky-0b36e9d0f.2.azurestaticapps.net/accverify");


      cy.get("@verificationToken").then((verificationTokenValue) => {
        cy.intercept("POST", "/verify-user-account?token="+verificationToken).as(
            "verificationRequest"
          );
        wait(500);
        cy.get(".form-control").type(verificationTokenValue);
        cy.get(".btn").click({ force: true });
      });
      cy.wait("@verificationRequest").then((interception) => {
        cy.url().should("include", "/login");
        cy.get(":nth-child(1) > .col-lg-7 > .form-control").type(email);
        cy.get(":nth-child(2) > .col-lg-7 > .form-control").type(
          "AssetAdvisor@1"
        );
        cy.get(".btn").click();

        //check for advisor name on dashboard

        cy.url().should("include", "/aldsh");

          let dashName = lastName + ", " + firstName + "'s Dashboard";
          cy.contains(dashName).should("be.visible");
      });
    });
  });
});
