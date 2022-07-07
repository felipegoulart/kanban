import DefaultModel from './DefaultModel'

interface ITask {
  id: number,
  createdAt: Date,
  updatedAt: Date,
  name: string
  timeEstimate: string | number
  timeTracked: string | number
  fineshedAt: Date
}

export default class Task extends DefaultModel implements ITask {
  private _name
  private _timeEstimate
  private _timeTracked
  private _fineshedAt

  constructor (name: string, timeEstimate: string | number, timeTracked: string | number, fineshedAt: Date) {
    super()
    this._name = name
    this._timeEstimate = timeEstimate
    this._timeTracked = timeTracked
    this._fineshedAt = fineshedAt
  }

  public get name () {
    return this._name
  }

  public set name (value) {
    this._name = value
  }

  public get timeEstimate () {
    return this._timeEstimate
  }

  public set timeEstimate (value) {
    this._timeEstimate = value
  }

  public get timeTracked () {
    return this._timeTracked
  }

  public set timeTracked (value) {
    this._timeTracked = value
  }

  public get fineshedAt () {
    return this._fineshedAt
  }

  public set fineshedAt (value) {
    this._fineshedAt = value
  }
}
