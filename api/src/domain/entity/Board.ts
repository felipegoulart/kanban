export default class Board {
  estimative?: Number

  constructor (readonly name: string) {
    if (name === '') throw new Error('Name is required')
  }
}
