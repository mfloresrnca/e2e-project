const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My E-commerce application', () => {
    let email = 'test@nicasource.com';
    let password = 'test123';
    
    before(function(){
        LoginPage.open();
    })
    
    describe('When first-time visitors go',() =>{
        it('should have the email and password inputs empty',() =>{
            expect(LoginPage.inputEmail).toHaveTextContaining('');
            expect(LoginPage.inputPassword).toHaveTextContaining('');
        });

    });

    describe('When email address and password are entered', () => {
        it('should login with valid credentials', () => { 
            LoginPage.login(email,password );
            console.log(SecurePage.username);
            expect(SecurePage.username).toBeExisting();
            expect(SecurePage.username).toHaveTextContaining('MY ACCOUNT');
        });
    });
});


