// filename: pages/LoginPage.js
const USERNAME_INPUT = { id: 'username' }
const PASSWORD_INPUT = { id: 'password' }
const SUBMIT_BUTTON = { css: 'button' }
const SUCCESS_MESSAGE = { css: '.flash.success' }
const something = {css:'i'}
const FAILURE_MESSAGE = {css:'.flash.error'}
const LOGIN_FORM = {id:'login'}
const BasePage = require('./pages/BasePage')

class LoginPage extends BasePage {
  constructor(driver) {
    this.driver = driver
  }

  async load() {
    await this.driver.get('http://the-internet.herokuapp.com/login')
    
    if(!(await this.driver.findElement(LOGIN_FORM).isDisplayed()))
    throw new Error('Login form not loaded')
  }

  async authenticate(username, password) {
    await this.driver.findElement(USERNAME_INPUT).sendKeys(username)
    await this.driver.findElement(PASSWORD_INPUT).sendKeys(password)
    await this.driver.findElement(SUBMIT_BUTTON).click()
  }

  async successMessagePresent() {
    return await this.driver.findElement(SUCCESS_MESSAGE).isDisplayed()
  }

  async failureMessagePresent() {
    console.log(await this.driver.findElement(FAILURE_MESSAGE).isDisplayed())
    return await 
    this.driver.findElement(FAILURE_MESSAGE).isDisplayed()
  }
}

module.exports = LoginPage