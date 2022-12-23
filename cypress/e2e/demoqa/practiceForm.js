/// <reference types="cypress-xpath" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import PracticeFormPage from "../../support/pages/demoqa/practiceFormPage";

const xpath = require('cypress-xpath')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
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
let studentInformation = new Map([
    ["Student Name", "Nghia Ngo"],
    ["Student Email", "ngonghia@gmail.com"],
    ["Gender", "Male"],
    ["Mobile", "0123456789"],
    ["Date of Birth", "23 July,1995"],
    ["Subjects", "English"],
    ["Hobbies", "Sports, Reading"],
    ["Picture", ""],
    ["Address", "abc abc"],
    ["State and City", "NCR Delhi"]
]);
const practiceFormPage= new PracticeFormPage()
let dob;

Given('I open the website: {string}', (url)=> {
    cy.visit(url)
    cy.viewport(1920, 1080)
})

Given('I open the demoqa praticeForm', ()=> {
    cy.visit("https://demoqa.com/automation-practice-form")
    cy.wait(Cypress.env("defaultWait"))
    cy.viewport(1920, 1080)
})
When('I wanna fill to the field text', (dataTable)=> {
    cy.log('raw : ' + dataTable.raw());
    cy.log('rows : ' + dataTable.rows());
    cy.log('HASHES : ' );
    dataTable.hashes().forEach(elem =>{
        practiceFormPage.getFieldInputText(elem.field).type(elem.value)
    });
})

When('I wanna select to the option', (dataTable)=> {
    cy.log('raw : ' + dataTable.raw());
    cy.log('rows : ' + dataTable.rows());
    cy.log('HASHES : ' );
    dataTable.hashes().forEach(elem =>{
        practiceFormPage.getGenderOption(elem.value).click()
    });
})
When('I wanna select {string} on subjects', (subject)=> {
    practiceFormPage.getSubjectField().type(subject)
    cy.wait(Cypress.env("defaultWait"))
    practiceFormPage.getSubjectFieldOption().click()
    cy.wait(Cypress.env("defaultWait"))
})

When('I wanna select the hobbies checkbox', (dataTable)=> {
    cy.log('raw : ' + dataTable.raw());
    cy.log('rows : ' + dataTable.rows());
    cy.log('HASHES : ' );
    dataTable.hashes().forEach(elem =>{
        practiceFormPage.getHobbiesCheckbox(elem.value).click()
    });
})
When('I wanna select {string} on DOB', (date)=> {
    dob = date
    let dateArr = date.split(" ")
    let day = dateArr[0]
    let month = dateArr[1]
    let year = dateArr[2]
    practiceFormPage.getSelectDOB().click()
    cy.wait(Cypress.env("defaultWait"))
    practiceFormPage.getSelectYear().select(year)
    cy.wait(Cypress.env("defaultWait"))
    practiceFormPage.getSelectMonth().select(months.get(month))
    cy.wait(Cypress.env("defaultWait"))
    practiceFormPage.getSelectDate(day).click()
    cy.wait(Cypress.env("defaultWait"))
})

When('I wanna select {string} on state', (state)=> {
    practiceFormPage.getSelectState().type(state,{force: true})
    cy.wait(Cypress.env("defaultWait"))
    practiceFormPage.getSelectStateOption().click()
    cy.wait(Cypress.env("defaultWait"))
})

When('I wanna select {string} on city', (city)=> {
    practiceFormPage.getSelectCity().type(city,{force: true})
    cy.wait(Cypress.env("defaultWait"))
    practiceFormPage.getSelectCityOption().click()
})
When('I wanna submit the form', ()=> {
    practiceFormPage.getSubmitButton().click()
    cy.wait(Cypress.env("defaultWait"))
})

Then('I wanna verify student information', ()=> {
    let count = 0
    for (let key of studentInformation.keys()) {
        count++
        practiceFormPage.getCellContentTable(count,1).should('be.visible');
        practiceFormPage.getCellContentTable(count,1).then($elem => {
            expect($elem.text()).to.be.contain(key)
        });
        practiceFormPage.getCellContentTable(count,2).should('be.visible');
        practiceFormPage.getCellContentTable(count,2).then($elem => {
            expect($elem.text()).to.be.contain(studentInformation.get(key))
        });
    }
})
