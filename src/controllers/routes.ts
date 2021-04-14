import express from 'express'

import CepAdapter from './cepAdapter/index'

const routes = express.Router()
const cep = new CepAdapter()

routes.use(function (req, res, next) {
  console.log()
  if (req.headers.authorization === process.env.AUTHORIZATION) {
    next()
  }
  res.status(401).json({
    message: 'Unauthorized',
    info: 'Contact the developer'
  })
})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.post('/cep', cep.post)
export default routes
