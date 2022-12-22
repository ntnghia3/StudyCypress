class PracticeFormPage {

    getFieldInputText(fieldName) {
        return cy.xpath('//*[@id=\"'+ fieldName + '\"]');
    }

    getGenderOption(value) {
        return cy.xpath('//label[normalize-space()=\"'+ value + '\"]');
        // return cy.xpath('//input[@id=\'gender-radio-1\']');
    }

    getSubjectField() {
        return cy.xpath('//input[@id=\'subjectsInput\']');
    }
    getSubjectFieldOption() {
        return cy.xpath('//div[contains(@class, \'subjects-auto-complete__menu\')]').first();
    }
    getHobbiesCheckbox(value) {
        return cy.xpath('//label[text()=\"'+ value + '\"]');
    }
    getSelectDOB() {
        return cy.xpath('//input[@id=\'dateOfBirthInput\']');
    }
    getSelectMonth() {
        return cy.xpath('//select[@class=\'react-datepicker__month-select\']');
    }
    getSelectYear() {
        return cy.xpath('//select[@class=\'react-datepicker__year-select\']');
    }

    // getSelectDate(date) {
    //     return cy.xpath('//*[@class=\"react-datepicker__day react-datepicker__day--0' + date +'\"]');
    // }
    getSelectDate(date) {
        return cy.get('.react-datepicker__day--0' + date);
    }

    getSelectState() {
        return cy.xpath('//input[@id=\'react-select-3-input\']');
    }
    getSelectStateOption() {
        return cy.xpath('//div[contains(@id,\'react-select\')]');
    }

    getSelectCity() {
        return cy.xpath('//input[@id=\'react-select-4-input\']');
    }
    getSelectCityOption() {
        return cy.xpath('//div[contains(@id,\'react-select\')]');
    }
    getSubmitButton() {
        return cy.xpath('//button[@id="submit"]');
    }

    getCellContentTable(row,col) {
        return cy.get('tbody tr:nth-child('+ row +') td:nth-child('+ col + ')');
    }
}
export default PracticeFormPage;