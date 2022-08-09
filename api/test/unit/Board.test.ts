import Board from '../../src/domain/entity/Board'

test('Deve criar um quadro', () => {
  const board = new Board('Projeto 1')
  expect(board.name).toBe('Projeto 1')
})

test('Não deve criar um quadro sem nome', () => {
  expect(() => new Board('')).toThrow('Name is required')
})
