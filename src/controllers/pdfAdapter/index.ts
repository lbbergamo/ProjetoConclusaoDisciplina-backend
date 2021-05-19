import { Request, Response } from 'express'
class PdfAdapter {
  async get (req: Request, res: Response): Promise<Response> {
    try {
      return res.json({ message: 'Success request' })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: error.message, erro: error })
    }
  }
}

export default PdfAdapter
