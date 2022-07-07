import Column from '../models/Column'
import DefaultModel from './DefaultModel'

interface IBoard {
  id: number,
  createdAt: Date,
  updatedAt: Date,
  name: string,
  description: string,
  columns?: Array<Column | any>
}

export default class Board extends DefaultModel implements IBoard {
  private _name
  private _description
  private _columns

  constructor (name: string, description: string, columns: Array<Column | any> = []) {
    super()
    this._name = name
    this._description = description
    this._columns = columns
  }

  public get name () {
    return this._name
  }

  public set name (value) {
    this._name = value
  }

  public get description () {
    return this._description
  }

  public set description (value) {
    this._description = value
  }

  public get columns () {
    return this._columns
  }

  addColumn (name: string) {
    const newColumn = new Column(name)
    this.columns.push(newColumn)
  }
}
