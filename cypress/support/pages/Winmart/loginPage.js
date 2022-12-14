class LoginPage {

    getEmailInput() {
        return cy.get('#userName');
    }
    getPwdInput(){
        return cy.get('#password');
    }
    getPhoneNoInput(){
        return cy.get('input[placeholder=\'Số điện thoại\']');
    }
    getPhoneContinueButton(){
        return cy.xpath('//button[contains(text(),\'Tiếp Tục\')]');
    }
    getForgotPwdButton(){
        return cy.xpath('//a[contains(text(),\'Đăng kí\')]');
    }
    getLoginSubmitButton(){
        return cy.xpath('//div[contains(text(),\'ĐĂNG NHẬP\')]');
    }
}
export default LoginPage;