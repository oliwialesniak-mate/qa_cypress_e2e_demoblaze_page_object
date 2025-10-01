class CartPage {
  openCart() {
    cy.contains('Cart').click();
  }

  assertProductInCart(productName) {
    cy.get('tr').contains(productName).should('exist');
  }

  placeOrder() {
    cy.contains('Place Order').click();
  }
}

export default CartPage;
