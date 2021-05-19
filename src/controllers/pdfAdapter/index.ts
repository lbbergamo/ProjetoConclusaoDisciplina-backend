import { Request, Response } from 'express'

import firebase from '../../clients/firebase/index'
class PdfAdapter {
  async get (req: Request, res: Response): Promise<Response> {
    try {
      const data = await firebase('1869177530')
      return res.json({ message: 'Success request', body: data })
    } catch (error) {
      // console.log(error)
      return res.status(400).json({ message: error.message, erro: error })
    }
  }
}

export default PdfAdapter
