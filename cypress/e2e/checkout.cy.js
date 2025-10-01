describe('Demoblaze Checkout Flow with Commands', () => {
  it('should complete purchase flow', () => {
    cy.visitPage();

    // Navigate to laptops and add Sony vaio i7
    cy.contains('Laptops').click();
    cy.addProductToCart('Sony vaio i7');

    // Go to cart and assert product
    cy.contains('Cart').click();
    cy.contains('Sony vaio i7').should('be.visible');

    // Place order
    cy.contains('Place Order').click();
    cy.fillOrderForm({
      name: 'John Doe',
      country: 'USA',
      city: 'New York',
      card: '1234567890123456',
      month: '10',
      year: '2025'
    });

    // Purchase and confirm modal
    cy.purchaseOrder('John Doe');
  });
});
