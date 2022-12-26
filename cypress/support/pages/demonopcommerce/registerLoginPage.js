class RegisterLoginPage {

    getRegisterButton() {
        return cy.get('.button-1.register-button');
    }

    getLoginButton() {
        return cy.xpath('//button[normalize-space()=\'Log in\']');
    }
    getYear() {
        return cy.xpath('//span[@class=\'ui-datepicker-year\']');
    }
    getPageTitle() {
        return cy.get('div[class=\'page-title\'] h1');
    }
    getGenderRadio(gender) {
        return cy.xpath('//input[@id=\'gender-' + gender + '\']');
    }
    getDateOfBirthDay() {
        return cy.xpath('//select[@name=\'DateOfBirthDay\']');
    }
    getDateOfBirthMonth() {
        return cy.xpath('//select[@name=\'DateOfBirthMonth\']');
    }
    getDateOfBirthYear() {
        return cy.xpath('//select[@name=\'DateOfBirthYear\']');
    }

    getFieldInputText(fieldName) {
        return cy.xpath('//*[@id=\"'+ fieldName + '\"]');
    }
    getSubmitRegisterButton() {
        return cy.xpath('//button[@id=\'register-button\' and @type = \'submit\']');
    }
    getResultTitle() {
        return cy.xpath('//div[@class=\'result\']');
    }
    getContinueRegisterButton() {
        return cy.get('.button-1.register-continue-button');
    }
}
export default RegisterLoginPage;