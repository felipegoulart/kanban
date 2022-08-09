import ColumnRepository from '../domain/repository/ColumnRepository'

export default class {
  constructor (readonly columnRepository: ColumnRepository) {}

  async getColumns (idBoard: number) {
    const columns = await this.columnRepository.findAllByIdBoard(idBoard)
    return columns
  }
}
