import retry from 'async-retry'
import database from 'infra/database.js'

async function waitForAllServices() {
  await awaitForWebServer()

  async function awaitForWebServer() {
    return retry(fetchStatusPage, {
      retries: 100,
      maxTimeout: 5000,
    })

    async function fetchStatusPage() {
      const response = await fetch('http://localhost:3000/api/v1/status')

      if (response.status !== 200) {
        throw new Error()
      }
    }
  }
}

async function clearDatabase() {
  await database.query('drop schema public cascade; create schema public;')
}

const orchestrator = {
  waitForAllServices,
  clearDatabase,
}

export default orchestrator
