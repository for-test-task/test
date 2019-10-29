## Requirements
* Java 8+
* node js >= 8.11
## Setup
1. Export API_KEY for temp-mail API in your terminal \
`export API_KEY=key`\
More details https://rapidapi.com/Privatix/api/temp-mail
2. Install the dependencies of this project with `npm install`.
- Optionaly you can create a Selenium Grid container to run the project. \
  Run: `docker-compose up -d`
## Running test suit
To run test suit with reports:
- `npm run test`

To generate report:
- `npm run report`