const fetch = require("node-fetch")

const API_HOST = "privatix-temp-mail-v1.p.rapidapi.com"
const API_KEY = process.env.API_KEY

const callApi = (path) => {
  if(!API_KEY) {
    throw new Error("Please export your temp-mail API_KEY")
  }
  return fetch(`https://${API_HOST}/request/${path}/`, {
    headers: {
      'x-rapidapi-host': API_HOST,
      'x-rapidapi-key': API_KEY
    }
  }).then(response => response.json())
}

const getMailDomains = () => callApi("domains")
const getMessages = (hash) => callApi(`mail/id/${hash}`)

const waitForConfirmationLink = async (email) => {
  const md5 = require("crypto").createHash("md5").update(email).digest("hex")
  let emails = []
  let resived = false
  while(!resived) {
    emails = await getMessages(md5)
    resived = Array.isArray(emails) && emails.length > 0
    await new Promise(resolve => setTimeout(resolve, 3000))
  }
  const [{mail_text: text}] = emails
  //fast solution
  const [confirmUrl] = text.match(/https:\/\/my.rozetka.com.ua\/authorize.{0,}confirm/)
  return confirmUrl
}

module.exports = {
  getMailDomains,
  getMessages,
  waitForConfirmationLink
}