import express = require('express')
import { cors } from './middleware/cors'
import { unhandledError } from './middleware/unhandled-error'
import { endpointNotFound } from './middleware/endpoint-not-found'
import bodyParser = require('body-parser')
import router from './endpoints/router'

const app = express()

app.set('trust proxy', true)
app.use(cors)

app.use(
  bodyParser.json(),
  bodyParser.urlencoded({
    extended: false
  })
)

app.use(unhandledError)

app.use(router)
app.use(endpointNotFound)

const port = process.env.PORT || 3000

const server = app.listen(port, async () => {
  console.info(`API is running on port ${port}.`)
})
