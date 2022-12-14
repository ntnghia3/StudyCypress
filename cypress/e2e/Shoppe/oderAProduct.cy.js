/// <reference types="cypress-xpath" />
/// <reference types="@shelex/cypress-allure-plugin" />
import '@shelex/cypress-allure-plugin';
const xpath = require('cypress-xpath')
const LoginPage = require("../../support/pages/Winmart/loginPage");
const MainPage = require("../../support/pages/Winmart/mainPage");
const ShoppingCart = require("../../support/pages/Winmart/shoppingCart");
describe('Winmart', { includeShadowDom: true }, () => {
    const loginPage = new LoginPage();
    const mainPage = new MainPage();
    const shoppingCart = new ShoppingCart();

    it.only('Order a Product Winmart ', () => {
        cy.visit(Cypress.env("defaultBaseUrl"))
        cy.viewport(1920, 1080)
        cy.wait(3000)
        mainPage.getClosePopupButton().click()

        cy.wait(2000)
        cy.scrollTo('top')
        mainPage.getLoginButton().click()
        loginPage.getEmailInput().type(Cypress.env("defaultUsername"))

        loginPage.getPwdInput().type(Cypress.env("defaultPassword"))
        loginPage.getLoginSubmitButton().click()
        cy.wait(2000)

        mainPage.getAddressShopping().click()
        mainPage.getStoreInfo().first().click()
        let priceOfProduct = ""
        let titleOfProduct = ""
        mainPage.getPriceAfterSaleProduct().first().invoke('text').then((myPrice) => {
            cy.log(myPrice)
            priceOfProduct = myPrice;
        })
        mainPage.getTitleProduct().first().invoke('text').then((myTitle) => {
            cy.log(myTitle)
            titleOfProduct = myTitle;
        })

        mainPage.getAddProduct().first().click({force: true})
        mainPage.getShoppingCart().click()
        cy.wait(2000)
        shoppingCart.getCartItem().should('have.length.above', 0)

        shoppingCart.getTitleProductInCart().each(($title) => {
            // cy.log($title.text())
            expect($title.text()).to.be.contain(titleOfProduct)
        })
        shoppingCart.getPriceAfterSaleOfAProductInCart().each(($price) => {
            // cy.log($price.text())
            expect($price.text()).to.be.contain(priceOfProduct)
        })
    });
});