class LoginPage {

    getEmailInput() {
        return cy.get('input[placeholder=\'Email/Số điện thoại/Tên đăng nhập\']');
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
        return cy.xpath('//a[contains(text(),\'Quên mật khẩu\')]');
    }
    getLoginSubmitButton(){
        return cy.xpath('//button[contains(text(),\'Đăng nhập\')]');
    }
}
export default LoginPage;