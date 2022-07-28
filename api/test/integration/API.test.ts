import axios from 'axios'

test('Deve retornar os quadros por meio da API', async () => {
  const response = await axios.get('http://localhost:3000/boards')
  const boards = response.data
  const [board] = boards

  expect(boards).toHaveLength(1)
  expect(board.name).toBe('Projeto 1')
})

test('Deve retornar as colunas de um quadro por meio da API', async () => {
  const response = await axios.get('http://localhost:3000/boards/1/columns')
  const columns = response.data
  const [column1, column2, column3] = columns

  expect(columns).toHaveLength(3)
  expect(column1.name).toBe('Coluna A')
  expect(column2.name).toBe('Coluna B')
  expect(column3.name).toBe('Coluna C')
})

test('Deve retornar os cartões de uma coluna por meio da API', async () => {
  const response = await axios.get('http://localhost:3000/boards/1/columns/1/cards')
  const cards = response.data
  const [card1, card2, card3] = cards

  expect(cards).toHaveLength(3)
  expect(card1.title).toBe('Tarefa 1')
  expect(card2.title).toBe('Tarefa 2')
  expect(card3.title).toBe('Tarefa 3')
})
