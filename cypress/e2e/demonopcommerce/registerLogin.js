/// <reference types="cypress-xpath" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import RegisterLoginPage from "../../support/pages/demonopcommerce/registerLoginPage";
import DemoNopCommerceMainPage from "../../support/pages/demonopcommerce/mainPage";

const xpath = require('cypress-xpath')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

const registerLoginPage= new RegisterLoginPage()
const demoNopCommerceMainPage= new DemoNopCommerceMainPage()
const months = new Map([
    ["Jan", 1],
    ["Feb", 2],
    ["Mar", 3],
    ["Apr", 4],
    ["May", 5],
    ["Jun", 6],
    ["Jul", 7],
    ["Aug", 8],
    ["Sep", 9],
    ["Oct", 10],
    ["Nov", 11],
    ["Dec", 12]
]);
const dateAfterMail = Date.now()

Given('I open the demo.nopcommerce website', ()=> {
    cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
    cy.wait(Cypress.env("defaultWait"))
    cy.viewport(1920, 1080)
})

When('I wanna register', ()=> {
    registerLoginPage.getRegisterButton().click()
    cy.wait(Cypress.env("defaultWait"))
    registerLoginPage.getPageTitle().then($elem => {
        expect($elem.text()).to.be.contain('Register')
    });
})
When('I wanna login', ()=> {
    registerLoginPage.getLoginButton().click()
    cy.wait(Cypress.env("defaultWait"))
    demoNopCommerceMainPage.getAccountIcon().should('be.visible').then($elem => {
        expect($elem.text()).to.be.eq('My account')
    });
})
When('I wanna select {string} for gender', (gender)=> {
    registerLoginPage.getGenderRadio(gender).click()
    cy.wait(Cypress.env("defaultWait"))
})
When('I wanna fill to the field text on demo.nopcommerce website', (dataTable)=> {
    cy.log('raw : ' + dataTable.raw());
    cy.log('rows : ' + dataTable.rows());
    cy.log('HASHES : ' );
    dataTable.hashes().forEach(elem =>{
        elem.value = (elem.field==='Email')? (elem.value + dateAfterMail + "@gmail.com") : (elem.value + "@gmail.com")
        registerLoginPage.getFieldInputText(elem.field).type(elem.value)
    });
})
When('I wanna select DOB {string} on demo.nopcommerce website', (date)=> {
    let dateArr = date.split(" ")
    let day = dateArr[0]
    let month = dateArr[1]
    let year = dateArr[2]
    registerLoginPage.getDateOfBirthYear().select(year)
    cy.wait(Cypress.env("defaultWait"))
    registerLoginPage.getDateOfBirthMonth().select(months.get(month))
    cy.wait(Cypress.env("defaultWait"))
    registerLoginPage.getDateOfBirthDay(day).select(day)
    cy.wait(Cypress.env("defaultWait"))
})

When('I wanna confirm register', ()=> {
    registerLoginPage.getSubmitRegisterButton().click()
    cy.wait(Cypress.env("defaultWait"))
    registerLoginPage.getResultTitle().then($elem => {
        expect($elem.text()).to.be.contain('Your registration completed')
    });
    registerLoginPage.getContinueRegisterButton().click()
    cy.wait(Cypress.env("defaultWait"))
})

When('I wanna login from main page demo.nopcommerce website', ()=> {
    demoNopCommerceMainPage.getLoginButton().click()
    cy.wait(Cypress.env("defaultWait"))
    registerLoginPage.getPageTitle().then($elem => {
        expect($elem.text()).to.be.contain('Welcome, Please Sign In!')
    });
})