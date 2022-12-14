class MainPage {

    getLoginButton() {
        return  cy.xpath('//a[contains(text(),\'Đăng Nhập\')]')
    }
    getRegisterButton(){
        return  cy.xpath('//a[contains(text(),\'Đăng Ký\')]')
    }

}
export default MainPage;