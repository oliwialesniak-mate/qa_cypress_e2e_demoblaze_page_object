import PageObject from './PageObject';

class CheckoutPage extends PageObject {
  constructor() {
    super();
    this.url = 'https://www.demoblaze.com';
    this.selectors = {
      laptopsLink: 'Laptops',
      cartLink: '#cartur',
      placeOrderBtn: 'Place Order',
      addToCartBtn: 'Add to cart',
      purchaseBtn: 'Purchase',
      modal: '.sweet-alert',
      okBtn: 'OK',
      nameInput: '#name',
      countryInput: '#country',
      cityInput: '#city',
      cardInput: '#card',
      monthInput: '#month',
      yearInput: '#year'
    };
  }

  goToLaptops() {
    cy.contains(this.selectors.laptopsLink).click();
  }

  selectLaptop(productName) {
    cy.contains(productName).click();
  }

  addToCart() {
    cy.contains(this.selectors.addToCartBtn).click();
  }

  goToCart() {
    cy.get(this.selectors.cartLink).click();
  }

  placeOrder() {
    cy.contains(this.selectors.placeOrderBtn).click();
  }

  fillOrderForm({ name, country, city, card, month, year }) {
    cy.get(this.selectors.nameInput).type(name);
    cy.get(this.selectors.countryInput).type(country);
    cy.get(this.selectors.cityInput).type(city);
    cy.get(this.selectors.cardInput).type(card);
    cy.get(this.selectors.monthInput).type(month);
    cy.get(this.selectors.yearInput).type(year);
  }

  purchase() {
    cy.contains(this.selectors.purchaseBtn).click();
  }

  assertModalContains({ name, card }) {
    cy.get(this.selectors.modal).should('contain.text', name);
    cy.get(this.selectors.modal).should('contain.text', card);
  }

  confirmModal() {
    cy.contains(this.selectors.okBtn).click();
  }
}

export default CheckoutPage;
