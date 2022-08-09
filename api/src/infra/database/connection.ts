export default interface IConnection {
  query (statement: String, paramns: any): Promise<any>
  close (): Promise<void>
}
