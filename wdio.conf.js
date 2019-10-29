const takeScreenshot = require('./utils/screenshot')

exports.config = {
  runner: 'local',
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',
  specs: [
    './test/specs/**/*.js'
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--headless', '--disable-gpu'],
    }
  }],
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  services: [['selenium-standalone']], //comment it if selenium server already runned
  reporters: [['allure', {
    outputDir: './logs/results/',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false,
  }]],
  mochaOpts: {
    timeout: 60000
  },

  afterTest(test) {
    if (test.passed === false) {
      takeScreenshot('./logs/screenshot/', 'screenshot_fail.png')
    }
  }
}
