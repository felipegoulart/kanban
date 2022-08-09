import Board from '../entity/Board'

export default interface IBoardRepository {
  findAll(): Promise<Board[]>
}
