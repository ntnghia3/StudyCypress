class MainPage {

    getLoginButton() {
        return  cy.xpath('//span[contains(text(),\'Đăng Nhập\')]')
    }
    getRegisterButton(){
        return  cy.xpath('//a[normalize-space()=\'ĐĂNG KÍ\']')
    }

}
export default MainPage;