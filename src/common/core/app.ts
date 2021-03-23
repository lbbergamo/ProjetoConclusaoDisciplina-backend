import express from 'express'
import { createServer, Server } from 'http'
import routes from '../../services/routes'
import cors from 'cors'

require('dotenv/config')

class App {
  public app = express()
  public server: Server

  constructor () {
    this.ready()
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(routes)
  }

  private ready (): void {
    this.server = createServer(this.app)
  }
}

export default new App()
