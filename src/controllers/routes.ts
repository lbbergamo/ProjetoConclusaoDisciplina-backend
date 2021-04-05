import express from 'express'

import CepAdapter from './cepAdapter/index'

const routes = express.Router()
const cep = new CepAdapter()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.post('/cep', cep.post)
export default routes
