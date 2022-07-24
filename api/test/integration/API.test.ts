import axios from 'axios'

test('Deve retornar os quadros por meio da API', async () => {
  const response = await axios.get('http://localhost:3000/boards')
  const boards = response.data

  expect(boards).toHaveLength(1)
})
