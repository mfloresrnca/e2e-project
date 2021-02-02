import Page from './page'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () { return $('#email') }
    get inputPassword () { return $('#passwd') }
    get btnSubmit () { return $('#SubmitLogin') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    setEmailandPassword(email,password){
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
    }
     login (email, password) {
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
