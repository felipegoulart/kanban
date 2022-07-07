import DefaultModel from './DefaultModel'

export default class Column extends DefaultModel {
  private _name: string

  constructor (name: string) {
    super()
    this._name = name
  }

  public get name (): string {
    return this._name
  }

  public set name (value: string) {
    this._name = value
  }
}
