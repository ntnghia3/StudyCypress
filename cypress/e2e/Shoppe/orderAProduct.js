/// <reference types="cypress-xpath" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../../support/pages/Winmart/mainPage";
import LoginPage from "../../support/pages/Winmart/loginPage";
import ShoppingCart from "../../support/pages/Winmart/shoppingCart";
const xpath = require('cypress-xpath')
const mainPage = new MainPage()
const loginPage = new LoginPage()
const shoppingCart = new ShoppingCart()
let priceOfProduct = ""
let titleOfProduct = ""


Given('I open the ecommerce website', ()=> {
    cy.visit(Cypress.env("defaultBaseUrl"))
    cy.viewport(1920, 1080)
    cy.wait(3000)
})

When('I wanna close the popup', ()=> {
    mainPage.getClosePopupButton().click()
})

When('I wanna login the web', ()=> {
    mainPage.getLoginButton().click()
    // cy.wait(2000)
    loginPage.getEmailInput().type(Cypress.env("defaultUsername"))

    loginPage.getPwdInput().type(Cypress.env("defaultPassword"))
    loginPage.getLoginSubmitButton().click()
    cy.wait(2000)

})
When('I wanna choose the address shopping', ()=> {
    mainPage.getAddressShopping().click()
    mainPage.getStoreInfo().first().click()
})

When('I wanna add a product to shopping cart', ()=> {
    mainPage.getPriceAfterSaleProduct().first().invoke('text').then((myPrice) => {
        cy.log(myPrice)
        priceOfProduct = myPrice;
    })
    mainPage.getTitleProduct().first().invoke('text').then((myTitle) => {
        cy.log(myTitle)
        titleOfProduct = myTitle;
    })

    mainPage.getAddProduct().first().click({force: true})
})

When('I wanna view shopping cart', ()=> {
    mainPage.getShoppingCart().click()
    cy.wait(2000)
})
Then('I wanna verify the information of added product', ()=> {
    shoppingCart.getCartItem().should('have.length.above', 0)

    shoppingCart.getTitleProductInCart().each(($title) => {
        // cy.log($title.text())
        expect($title.text()).to.be.contain(titleOfProduct)
    })
    shoppingCart.getPriceAfterSaleOfAProductInCart().each(($price) => {
        // cy.log($price.text())
        expect($price.text()).to.be.contain(priceOfProduct)
    })
})
