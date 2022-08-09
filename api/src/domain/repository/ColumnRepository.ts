import Column from '../entity/Column'

export default interface IColumnRepository {
  findAllByIdBoard(idBoard: number): Promise<Column[]>
}
