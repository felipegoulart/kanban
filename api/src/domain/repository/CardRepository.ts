import Card from '../entity/Card'

export default interface ICardRepository {
  findAllByIdColumn(idColumn: number): Promise<Card[]>
}
