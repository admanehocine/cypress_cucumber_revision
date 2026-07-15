import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";


Given('je suis sur le site {string}', (url) => {
 cy.visit(url)
})
When('je clique sur creer mon compte', () => {
  cy.get('#nav-register').click()
})
Then('je me rederige vers la page {string}', (url) => {
  cy.visit(url)
})

When('je saisie le prenom', (p) => {
  cy.get('#register-prenom').type(p)
})

When('je saisie le nom', (n) => {
  cy.get('#register-nom"').type(n)
})
When('je saisie l email', () => {
  let e=Math.random().toString(36).substring(2, 15) + "@gmail.com";
  cy.get('#register-email').type(e)
})
When('je saisie le date de naissance', (b) => {
  cy.get('#register-date-naissance').type(b)
})
When('je saisie le password', (pass) => {
  cy.get('#register-password').type(pass)
})

When('je confirme le password', (cpass) => {
  cy.get('#register-password-confirm').type(cpass)
})
When('je choisi le type de compte', () => {
  cy.get('#register-role').select('Client')
})

When('je clique sur le boutton creer compte', () => {
  cy.get('#register-submit').click()
})

Then('ce message est visible {string}', (s) => {
  cy.get('[data-testid="alert-message"]').should('contain.text', s)
})
