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
const practiceFormPage= new PracticeFormPage()
let dob;

Given('I open the website: {string}', (url)=> {
    cy.visit(url)
})

Given('I open the demoqa praticeForm', ()=> {
    cy.visit("https://demoqa.com/automation-practice-form")
    cy.wait(2000)
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
    cy.wait(2000)
    practiceFormPage.getSubjectFieldOption().click()
    cy.wait(2000)
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
    cy.wait(2000)
    practiceFormPage.getSelectYear().select(year)
    cy.wait(2000)
    practiceFormPage.getSelectMonth().select(months.get(month))
    cy.wait(2000)
    practiceFormPage.getSelectDate(day).click()
    cy.wait(2000)
})

When('I wanna select {string} on state', (state)=> {
    practiceFormPage.getSelectState().select(state)
})