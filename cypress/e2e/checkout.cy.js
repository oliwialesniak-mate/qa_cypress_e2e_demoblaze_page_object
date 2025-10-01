describe('Demoblaze Checkout Flow', () => {
  it('should complete purchase flow using POM', () => {
    cy.visitPage();

    // Navigate and add product
    cy.goToLaptops();
    cy.addProductToCart('Sony vaio i7');

    // Go to cart
    cy.goToCart();
    cy.contains('Sony vaio i7').should('be.visible');

    // Place order and fill form
    cy.placeOrder();
    cy.fillOrderForm({
      name: 'John Doe',
      country: 'USA',
      city: 'New York',
      card: '1234567890123456',
      month: '10',
      year: '2025'
    });

    // Purchase and confirm modal (assert both name & card)
    cy.purchaseOrder({ name: 'John Doe', card: '1234567890123456' });
  });
});
