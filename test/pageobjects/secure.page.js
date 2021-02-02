import Page from './page'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get username() { return $('.page-heading')}
}

module.exports = new SecurePage();
