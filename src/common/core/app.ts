import express from 'express'
import { createServer, Server } from 'http'
import cors from 'cors'

require('dotenv/config')

class App {
  public app = express()
  public server: Server

  constructor () {
    this.ready()
    this.app.use(cors())
    this.app.use(express.json())
  }

  private ready (): void {
    this.server = createServer(this.app)
  }
}

export default new App()
