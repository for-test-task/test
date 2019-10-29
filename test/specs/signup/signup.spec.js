const {addStep} = require('@wdio/allure-reporter').default
const signupPage = require('../../../objects/signup/signup.page')
const confirmBanner = require('../../../objects/user-account/banner.component')
const bannerText = require('../../../resources/user-account/banner')
const {waitForConfirmationLink} = require('../../../utils/mail')
const {fakeEmail, fakeFirstName, fakePassword} = require('../../../utils/generate-data')

describe('Signup', function() {
  before(function () {
    browser.url('https://my.rozetka.com.ua/signup/')
  })

  it('Check banner after email confirmation', function() {
    const email = browser.call(fakeEmail)
    const data = {
      name: fakeFirstName(),
      email: email,
      password: fakePassword(),
    }
    signupPage.fillForm(data)
    addStep('Fill signup from', `${data}`)
    const confirmationLink = browser.call(() => waitForConfirmationLink(email))
    browser.url(confirmationLink)
    addStep('Open confirmationLink')
    confirmBanner.assertText(bannerText.ru.assertionText)
    addStep(`Text ${bannerText.ru.assertionText} exists`)
  })
})