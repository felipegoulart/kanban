import Column from '../../src/entity/Column'

test('Deve criar uma coluna', () => {
  const column = new Column('Coluna A', true)
  expect(column.name).toBe('Coluna A')
  expect(column.hasEstimative).toBeTruthy()
})

test('Não deve criar uma coluna sem nome', () => {
  expect(() => new Column('', true)).toThrow(new Error('Name is required'))
})
