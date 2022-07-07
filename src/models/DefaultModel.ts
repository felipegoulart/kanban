export default class DefaultModel {
  readonly _id: number = Math.ceil(Math.random())
  readonly _createdAt: Date = new Date()
  private _updatedAt: Date = new Date()

  public get id (): number {
    return this._id
  }

  public get createdAt (): Date {
    return this._createdAt
  }

  public get updatedAt (): Date {
    return this._updatedAt
  }

  private set updatedAt (value) {
    this._updatedAt = value
  }

  public setUpdatedAt () {
    this.updatedAt = new Date()
  }
}
