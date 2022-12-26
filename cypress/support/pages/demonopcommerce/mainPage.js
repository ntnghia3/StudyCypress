class DemoNopCommerceMainPage {

    getRegisterButton() {
        return cy.get('.ico-register');
    }

    getLoginButton() {
        return cy.xpath('//a[normalize-space()=\'Log in\']');
    }
    getAccountIcon() {
        return cy.xpath('//a[@class=\'ico-account\']');
    }
}
export default DemoNopCommerceMainPage;