class MainPage {

    getLoginButton() {
        return  cy.xpath('//p[contains(text(),\'Tài khoản\')]')
    }

    getClosePopupButton(){
        return  cy.xpath('//button[@class="viteex-btn-close" and @title="Đóng"]').first()
    }
    getAddProduct(){
        return cy.xpath('//button[contains(@class,"add-item-to-cart__Button-sc-1ruto21-1 eSzuRc")]')
    }
    getStoreInfo(){
        return cy.get('.store-info')
    }
    getPriceAfterSaleProduct(){
        return cy.xpath('//div[contains(@class,"product-card__Price-sc-1q72qgw-6 flNRmQ")]')
    }
    getTitleProduct(){
        return cy.xpath('//*[contains(@class,"product-card__Title-sc-1q72qgw-4 hrGtcE")]')
    }
    getShoppingCart(){
        return cy.xpath('//p[contains(text(),\'Giỏ hàng\')]')
    }

    getAddressShopping(){
        return cy.xpath('//div[contains(text(),\'Giao hàng\')]')
    }

}
export default MainPage;