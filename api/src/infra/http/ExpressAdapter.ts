import express, { Request, Response } from 'express'
import Http from './Http'

export default class ExpressAdapter implements Http {
  app: any

  constructor () {
    this.app = express()
  }

  route (method: string, url: string, callback: Function): void {
    this.app[method](url, async (req: Request, res: Response) => {
      const { params, body } = req
      const response = await callback(params, body)

      res.json(response)
    })
  }

  listen (port: number): void {
    this.app.listen(port)
  }
}
