import CheckoutPage from '../pages/CheckoutPage';

const checkout = new CheckoutPage();

// Visit page
Cypress.Commands.add('visitPage', (url) => {
  checkout.visit(url);
});

// Add product to cart and assert alert
Cypress.Commands.add('addProductToCart', (productName) => {
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('alert');
  });
  checkout.selectLaptop(productName);
  checkout.addToCart();
  cy.get('@alert').should('have.been.calledWith', 'Product added');
});

// Fill order form
Cypress.Commands.add('fillOrderForm', (formData) => {
  checkout.fillOrderForm(formData);
});

// Purchase and confirm modal
Cypress.Commands.add('purchaseOrder', (expectedName) => {
  checkout.purchase();
  checkout.assertModalContains(expectedName);
  checkout.confirmModal();
});
