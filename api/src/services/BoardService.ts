import IBoardRepository from '../domain/repository/BoardRepository'

export default class {
  constructor (readonly boardRepository: IBoardRepository) {}

  async getBoards () {
    const boards = await this.boardRepository.findAll()
    return boards
  }
}
