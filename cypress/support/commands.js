import CheckoutPage from './CheckoutPage';

const checkout = new CheckoutPage();

// Visit homepage
Cypress.Commands.add('visitPage', (url) => {
  checkout.visit(url);
});

// Add a product to the cart and assert alert
Cypress.Commands.add('addProductToCart', (productName) => {
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('alert');
  });
  checkout.selectLaptop(productName);
  checkout.addToCart();
  cy.get('@alert').should('have.been.calledWithMatch', /Product added/i);
});

// Fill the order form
Cypress.Commands.add('fillOrderForm', (formData) => {
  checkout.fillOrderForm(formData);
});

// Purchase and confirm modal
Cypress.Commands.add('purchaseOrder', ({ name, card }) => {
  checkout.purchase();
  checkout.assertModalContains({ name, card });
  checkout.confirmModal();
});

// Navigate using POM
Cypress.Commands.add('goToLaptops', () => checkout.goToLaptops());
Cypress.Commands.add('goToCart', () => checkout.goToCart());
Cypress.Commands.add('placeOrder', () => checkout.placeOrder());
