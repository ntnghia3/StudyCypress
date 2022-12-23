class DateKeeper {

    getDateKeeper() {
        return cy.xpath('//input[@id=\"datepicker1\"]');
    }

    getMonth() {
        return cy.xpath('//span[@class=\'ui-datepicker-month\']');
    }
    getYear() {
        return cy.xpath('//span[@class=\'ui-datepicker-year\']');
    }
    getNextButton() {
        return cy.xpath('//span[@class=\'ui-icon ui-icon-circle-triangle-e\']');
    }
    getPreviousButton() {
        return cy.xpath('//span[@class=\'ui-icon ui-icon-circle-triangle-w\']');
    }

}
export default DateKeeper;