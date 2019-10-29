const fs = require('fs');

function takeScreenshot(path, image) {
  fs.access(path, fs.F_OK, (err) => {
    if (err) {
      fs.mkdir(path, {recursive: true}, err => {})
    }
    browser.saveScreenshot(path + image)
  });
}

module.exports = takeScreenshot