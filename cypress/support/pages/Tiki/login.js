class LoginPage {

    getEmailInput() {
        return cy.get('input[placeholder=\'Vui lòng nhập số điện thoại hoặc email của bạn\']');
    }
    getPwdInput(){
        return cy.get('input[placeholder=\'Mật khẩu\']');
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
        return cy.xpath('//button[contains(text(),\'Đăng Nhập\')]');
    }
}
export default LoginPage;