import { Request, Response } from 'express'

import firebase from '../../clients/firebase/index'

import pdf from './functions/generate'
class PdfAdapter {
  async get (req: Request, res: Response): Promise<Response> {
    try {
      const id: string = req.query.chave
      const bancoDeDados = await firebase(id)
      const dados = await pdf(id.toString(), bancoDeDados)
      return res.json({ message: 'Success request', url: dados })
    } catch (error) {
      return res.status(400).json({ message: error.message, erro: error })
    }
  }
}

export default PdfAdapter
