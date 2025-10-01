class ProductPage {
  addToCart() {
    cy.contains('Add to cart').click();
  }
}

export default ProductPage;
