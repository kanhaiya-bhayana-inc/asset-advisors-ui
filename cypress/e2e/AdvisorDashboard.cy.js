import { faker } from "@faker-js/faker";
import { wait } from "@testing-library/user-event/dist/utils";

function login() {
  //login
  // cy.visit("https://proud-sky-0b36e9d0f.2.azurestaticapps.net/");
  cy.visit("http://localhost:3000/");
  cy.get(":nth-child(3) > .nav-link").click();
  cy.readFile("cypress/fixtures/credentials.json").then((credentials) => {
    cy.get(":nth-child(1) > .col-lg-7 > .form-control").type(
      credentials.username
    );

    cy.get(":nth-child(2) > .col-lg-7 > .form-control").type(
      credentials.password
    );
    cy.get(".btn").click();
    cy.wait(2000);
  });
}

function signOut() {
  cy.get(".cstm").click();
  wait(1000);
  cy.get(":nth-child(2) > .swal-button").click();
  cy.wait(2000);
}

describe("Advisor Operations", () => {
  it("Add client", () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const phone = faker.phone.number("##########");
    const email = faker.internet.email();
    const address = faker.address.streetAddress().split(" ")[0];
    const city = faker.address.city();
    const state = faker.address.state();
    const pass = "AssetAdvisor@1";

    login();
    //Add client process starts
    cy.url().should("include", "/aldsh");
    cy.contains("Add Clients").should("be.visible");

    const clientCredentials = {
      username: email,
      password: pass,
      phoneNumber: phone,
    };
    cy.writeFile("cypress/fixtures/clientCredentials.json", clientCredentials);

    cy.get(".pt-4 > .nav_link").click({ force: true });
    cy.get(".col-4:nth-child(2) > .form-control").type(firstName);
    cy.get(".col-4:nth-child(3) > .form-control").type(lastName);
    cy.get(".col-4:nth-child(4) > .form-control").type(phone);
    cy.get(".col-4:nth-child(5) > .form-control").type(email);
    cy.get(".col-4:nth-child(6) > .form-control").type("Incedo");
    cy.get(".col-4:nth-child(7) > .form-control").type(address);
    cy.get(".col-4:nth-child(8) > .form-control").type(state);
    cy.get(".col-4:nth-child(9) > .form-control").type(city);
    cy.get(".btn").click();
    cy.wait(3000);
    signOut();
  });

  it("Edit Client", () => {
    login();
    const newCompany = "Incedo Inc.";
    const lastName = faker.name.lastName();
    cy.get("tbody > :nth-child(1) > :nth-child(6)").click();
    cy.wait(2000);
    cy.viewport(1280, 720)
    cy.get(".float-right").click();
    cy.get(":nth-child(17) > .form-control").clear();
    cy.get(":nth-child(17) > .form-control").type(newCompany);
    cy.get(":nth-child(14) > .form-control").clear();
    cy.get(":nth-child(14) > .form-control").type(lastName);
    cy.get(".col-2.mt-2 > .btn").click();
    
    cy.wait(5000);
    
    cy.contains(newCompany).should("be.visible");
    cy.contains(lastName).should("be.visible");
    cy.wait(5000);
    signOut();
  });

  it("Add Investment", () => {
    cy.viewport(1620, 720);
    //login
    login();

    cy.get("tbody > :nth-child(1) > :nth-child(3) > a").click();
    cy.wait(1000);
    cy.get(":nth-child(12) > .nav_link").click({ force: true });

    cy.wait(2000);
    cy.get(":nth-child(2) > .form-control").type("randomName");

    // cy.get('.addbtn > .dropdown > .form-select')

    cy.get(".addbtn > .dropdown > .form-select").select("Retirement");
    cy.get(".mt-3 > .dropdown > .form-select").select("1");

    cy.get(".col-4:nth-child(6) > .form-control").type("123456");
    cy.get(".col-4:nth-child(7) > .form-control").type("high growth");
    cy.get(".col-4:nth-child(8) > .form-control").type("231");
    cy.get(".btn").click();

    cy.wait(5000);
    cy.contains("Investment Details").should("be.visible");
    cy.wait(2000);
    cy.contains("Incedo").should("be.visible");

    cy.wait(3000);
    signOut();
  });

  it("Edit Investment", () => {
    cy.viewport(1620, 720);
    login();
    cy.get("tbody > :nth-child(1) > :nth-child(3) > a").click();
    cy.wait(1000);

    let newAmount = 13321;

    cy.get(":nth-child(1) > :nth-child(7) > a > svg").click();
    cy.get(".float-right").click();
    cy.get(
      '[style="margin-left: 40px; width: 360px;"] > .form-control'
    ).clear();
    cy.get('[style="margin-left: 40px; width: 360px;"] > .form-control').type(
      newAmount
    );
    cy.get(".mb-4 > .btn").click();
    cy.wait(5000);
    cy.contains(newAmount).should("be.visible");
    cy.wait(3000);
    signOut();
  });

  it("Delete Investment", () => {
    cy.viewport(1620, 720)
    login();
    cy.get("tbody > :nth-child(1) > :nth-child(3) > a").click();
    cy.wait(1000);

    cy.get("tbody > :nth-child(1) > :nth-child(2)")
      .invoke("text")
      .then((text) => {
        console.log(text);
        cy.get('tbody > :nth-child(1) > :nth-child(9) > svg').click({force:true})
        cy.get(":nth-child(2) > .swal-button").click();
        cy.wait(1000);
        cy.get(".swal-button").click();
        cy.wait(4000);
        cy.contains(text).should("not.exist");
        cy.wait(4000);
      });
    signOut();
  });

  it("Edit Advisor own profile", () => {
    cy.viewport(1280, 720)
    const lastName = faker.name.lastName();
    let newCompany = "Incedo Inc.";

    login();

    cy.get('[href="/profile"]').click();
    cy.wait(1000);
    cy.get(".float-right").click();

    cy.get(":nth-child(14) > .form-control").clear();
    cy.get(":nth-child(14) > .form-control").type(lastName);
    cy.get(":nth-child(17) > .form-control").clear();
    cy.get(":nth-child(17) > .form-control").type(newCompany);
    cy.get(".col-2.mt-2 > .btn").click();

    cy.wait(3000);
    cy.contains(lastName).should("be.visible");
    cy.contains(newCompany).should("be.visible");
    cy.wait(5000);
    signOut();
  });

  it("Delete Client", () => {
    login();

    cy.get("tbody > :nth-child(1) > :nth-child(2)")
      .invoke("text")
      .then((clientID) => {
        cy.get("tbody > :nth-child(1) > :nth-child(8)").click();
        cy.get(":nth-child(2) > .swal-button").click();
        cy.wait(2000);
        cy.get(".swal-button").click();
        cy.wait(1000);
        cy.contains(clientID).should("not.exist");
        cy.wait(3000);
        signOut();
      });
  });
});
