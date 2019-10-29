const faker = require('faker');
const {getMailDomains} = require('./mail')

const fakeFirstName = () => faker.name.firstName()

const fakePassword = () => faker.internet.password(12)

const fakeEmail = async () => {
  const [domain] = await getMailDomains() // better to do it once before test run and save it to file
  return `${faker.internet.userName().toLocaleLowerCase()}${domain}`
}

module.exports = {
  fakeFirstName,
  fakePassword,
  fakeEmail,
}