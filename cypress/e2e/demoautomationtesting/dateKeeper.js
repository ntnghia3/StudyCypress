/// <reference types="cypress-xpath" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import DateKeeper from "../../support/pages/demoautomationtesting/dateKeeper";

const xpath = require('cypress-xpath')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

const dateKeeper= new DateKeeper()
let dob
const monthList = new Map([
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

const expam = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",]
var dateArr
var day
var year
var monthNoActual
var monthNoExpect
var month
var yearDiff
Given('I open the dateKeeper website', ()=> {
    cy.visit("https://demo.automationtesting.in/Datepicker.html")
    cy.wait(Cypress.env("defaultWait"))
    cy.viewport(1920, 1080)
})
function findMonthDiff(month){
    let count = 0

    for (var key of monthList.keys()) {
        count++

        if(month.indexOf(key) >= 0 )
        {
            return count
        }
    }
    return count
}
When('I wanna select the DateKeeper', ()=> {
    dateKeeper.getDateKeeper().click()
})
When('I wanna select {string} on DateKeeper', (date)=> {


    cy.log("Nghia00___"+ month + "__" + year)


    // dateKeeper.getMonth().then(($Object) => {
       // xxx = $Object.text().toString()
    // });

    dateKeeper.getYear().then($elem => {
        yearDiff = parseInt($elem.text()) - parseInt(year)
    });
    cy.log("Nghia22___"+ yearDiff)
    if (yearDiff < 0) {
        let countLoop = Math.abs(yearDiff) + (12 - monthNo)
        cy.log("Nghia33___"+ countLoop)
        for (let i = 0; i < countLoop ; i++) {
            dateKeeper.getPreviousButton().click()
        }
        dateKeeper.getYear().then($elem => {
            expect($elem.text()).to.be.eq(year)
        });
        dateKeeper.getMonth().then($elem => {
            expect($elem.text()).to.be.contain(month)
        });

    }

    if (yearDiff > 0) {
        let countLoop = Math.abs(yearDiff) + monthNo
        for (let i = 0; i < countLoop ; i++) {
            dateKeeper.getNextButton().click()
        }
        dateKeeper.getYear().then($elem => {
            expect($elem.text()).to.be.eq(year)
        });
        dateKeeper.getMonth().then($elem => {
            expect($elem.text()).to.be.contain(month)
        });
    }


    cy.wait(Cypress.env("defaultWait"))

})

When('I wanna test', ()=> {
    cy.log("Nghiaday___" + day)
    cy.log("Nghiamonth___" + month)
    cy.log("Nghiayear___" + year)
    cy.log("NghiamonthNoActual___" + monthNoActual)
    cy.log("NghiamonthNoExpect___" + monthNoExpect)
    cy.log("NghiayearDiff___" + yearDiff)
})

When('I wanna get month different from {string} with current date', (date)=> {
    dob = date
    dateArr = date.split(" ")
    day = dateArr[0]
    month = dateArr[1].toString()
    year = dateArr[2]
    dateKeeper.getMonth().then(($Object) => {
        monthNoActual = findMonthDiff($Object.text())
    });
    monthNoExpect =  findMonthDiff(month)
    dateKeeper.getYear().then($elem => {
        yearDiff = parseInt($elem.text()) - parseInt(year)
    });
})