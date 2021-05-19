/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'

import CepAdapter from './cepAdapter/index'
import PdfAdapter from './pdfAdapter'

const routes = express.Router()
const cep = new CepAdapter()
const pdf = new PdfAdapter()
routes.use(function (req, res, next) {
  if (req.headers.authorization !== process.env.AUTHORIZATION) {
    res.status(401).json({
      message: 'Unauthorized',
      info: 'Contact the developer'
    })
  } else {
    next()
  }
})

routes.post('/cep', cep.post)
routes.get('/pdf', pdf.get)
export default routes
