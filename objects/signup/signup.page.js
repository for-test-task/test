class SignUpPage {
  get name() {return $('#signup_form [name=title]')}
  get email() {return $('#signup_form [name=login]')}
  get password() {return $('#signup_form [name="password"]')}
  get submitButton() {return $('.signup-submit button')}

  setEmail(email) {
    this.email.waitForExist()
    this.email.clearValue()
    this.email.setValue(email)
  }

  setName(name) {
    this.name.waitForExist()
    this.name.clearValue()
    this.name.setValue(name)
  }

  setPassword(password) {
    this.password.waitForExist()
    this.password.clearValue()
    this.password.setValue(password)
  }

  fillForm(data) {
    this.setName(data.name)
    this.setEmail(data.email)
    this.setPassword(data.password)
    this.submit()
  }
  submit() {this.submitButton.click()}
}

module.exports = new SignUpPage()