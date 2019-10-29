const assert = require("assert")

class ConfirmBanner {
  get confirmationBanner() {return $('.code1')}

  assertExists() {
    assert(this.confirmationBanner.isExisting(), 'Banner doesn`t exist')
  }

  assertText(text) {
    this.confirmationBanner.waitForExist()
    assert.strictEqual(this.confirmationBanner.getText(), text)
  }
}

module.exports = new ConfirmBanner()