// cypress/support/pages/contactForm.js
/// <reference types="cypress" />

class ContactFormPage {
  typeEmail(email) {
    cy.get('#recipient-email').type(email);
  }

  typeName(name) {
    cy.get('#recipient-name').type(name);
  }

  typeMessage(message) {
    cy.get('#message-text').type(message);
  }

  clickOnSendMessageBtn() {
    cy.contains('Send message').click();
  }

  assertAlert(expectedText) {
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain(expectedText);
    });
  }
}

export default ContactFormPage;
