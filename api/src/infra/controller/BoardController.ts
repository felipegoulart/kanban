import Http from '../http/Http'
import BoardRepositoryDatabase from '../repository/BoardRepositoryDatabase'
import Connection from '../database/connection'
import BoardService from '../../services/BoardService'
import ColumnService from '../../services/ColumnService'
import ColumnRepositoryDatabase from '../repository/ColumnRepositoryDatabase'
import CardRepositoryDatabase from '../repository/CardRepositoryDatabase'
import CardService from '../../services/CardService'

export default class BoardController {
  constructor (readonly http: Http, readonly connection: Connection) {
    http.route('get', '/boards', async (params: any, body: any) => {
      const boardRepository = new BoardRepositoryDatabase(connection)
      const boardService = new BoardService(boardRepository)
      const boards = await boardService.getBoards()

      return boards
    })

    http.route('get', '/boards/:idBoard/columns', async function (params: any, body: any) {
      console.log(params.idBoard)
      const columnRepository = new ColumnRepositoryDatabase(connection)
      const columnService = new ColumnService(columnRepository)
      const columns = await columnService.getColumns(parseInt(params.idBoard))

      return columns
    })

    http.route('get', '/boards/:idBoard/columns/:idColumn/cards', async (params: any, body: any) => {
      const cardRepository = new CardRepositoryDatabase(connection)
      const cardService = new CardService(cardRepository)
      const cards = await cardService.getCards(parseInt((params.idColumn)))

      return cards
    })
  }
}
