import BoardService from '../../src/services/BoardService'
import BoardRepositoryMemory from '../../src/infra/repository/BoardRepositoryMemory'

test('Deve listar os quadros', async () => {
  const boardRepository = new BoardRepositoryMemory()

  const boardService = new BoardService(boardRepository)
  const boards = await boardService.getBoards()
  expect(boards).toHaveLength(1)

  const [board] = boards
  expect(board.name).toBe('Projeto 1')
})
