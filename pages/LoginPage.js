// filename: pages/LoginPage.js
const USERNAME_INPUT = { id: 'username' }
const PASSWORD_INPUT = { id: 'password' }
const SUBMIT_BUTTON = { css: 'button' }
const SUCCESS_MESSAGE = { css: '.flash.success' }
const FAILURE_MESSAGE = {css:'.flash.error'}
const LOGIN_FORM = {id:'login'}
const BasePage = require('./BasePage')

class LoginPage extends BasePage {
  constructor(driver) {
    super(driver)
  }

  async load() {
    await this.driver.get('http://the-internet.herokuapp.com/login')
    
    if(!(await this.driver.findElement(LOGIN_FORM).isDisplayed()))
    throw new Error('Login form not loaded')
  }

  async authenticate(username, password) {
    await this.type(USERNAME_INPUT, username)
    await this.type(PASSWORD_INPUT,password)
    await this.click(SUBMIT_BUTTON)
  }

  async successMessagePresent() {
    return this.isDisplayed(SUCCESS_MESSAGE)
  }

  async failureMessagePresent() {
    return await this.isDisplayed(FAILURE_MESSAGE)
  }
}

module.exports = LoginPage