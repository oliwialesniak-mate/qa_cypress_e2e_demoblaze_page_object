class HomePage {
  visit() {
    cy.visit('https://www.demoblaze.com/');
  }

  clickOnLink(linkText) {
    cy.contains(linkText).click();
  }

  clickLaptops() {
    cy.contains('Laptops').click();
  }

  selectProduct(productName) {
    cy.contains(productName).click();
  }
}

export default HomePage;
