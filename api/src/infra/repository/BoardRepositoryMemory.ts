import Board from '../../domain/entity/Board'
import IBoardRepository from '../../domain/repository/BoardRepository'

export default class BoardRepositoryMemory implements IBoardRepository {
  boards: Board[]

  constructor () {
    this.boards = [
      new Board('Projeto 1')
    ]
  }

  async findAll (): Promise<Board[]> {
    return this.boards
  }
}
