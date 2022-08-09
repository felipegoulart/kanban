import Board from '../../domain/entity/Board'
import IBoardRepository from '../../domain/repository/BoardRepository'
import IConnection from '../database/connection'

export default class BoardRepositoryDatabase implements IBoardRepository {
  constructor (readonly connection: IConnection) {}

  async findAll (): Promise<Board[]> {
    const boardsData = await this.connection.query('select id_board, name from kanban.board', [])
    const boards: Board[] = []

    for (const boardData of boardsData) {
      const board = new Board(boardData.name)
      boards.push(board)
    }

    return boards
  }
}
