import pgPromise from 'pg-promise'
import IConnection from './connection'

export default class PgPromiseConnection implements IConnection {
  connection: any

  constructor () {
    this.connection = pgPromise()('postgres://postgres:mysecretpassword@localhost:5432/courses')
  }

  query (statement: String, paramns: any): Promise<any> {
    return this.connection.query(statement, paramns)
  }

  close (): Promise<void> {
    return this.connection.$pool.end()
  }
}
