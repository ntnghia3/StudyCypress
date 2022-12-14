class ShoppingCart {

    getCartItem() {
        return cy.xpath('//div[contains(@class,"cart-page cart-item")]');
    }
    getTitleProductInCart() {
        return cy.xpath('//div[contains(@class,"cart-page cart-item")]//p').first();
    }
    getNumberOfAProductInCart() {
        return cy.xpath('//div[contains(@class,"cart-page cart-item")]//p').last();
    }

    getPriceAfterSaleOfAProductInCart() {
        return cy.xpath('//div[contains(@class,"price-info cart-page flex-bs-33 flex-end pr-10")]//div').first();
    }

}
export default ShoppingCart;