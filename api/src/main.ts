import Board from './entity/Board'
import Column from './entity/Column'
import Card from './entity/Card'
import express from 'express'
import pgp from 'pg-promise'

const app = express()
const PORT = 3000

const connectionConfig = {
  host: 'localhost',
  port: 5432,
  database: 'courses',
  user: 'postgres',
  password: 'mysecretpassword'
}
const connection = pgp()(connectionConfig)

app.get('/boards', async (req, res) => {
  const boardsData = await connection.query('select name from kanban.board', [])
  const boards: Board[] = []

  for (const boardData of boardsData) {
    boards.push(new Board(boardData.name))
  }

  res.json(boards)
})

app.get('/boards/:idBoard/columns', async (req, res) => {
  const columnsData = await connection.query('select name, has_estimative from kanban.column where id_board = $1', [req.params.idBoard])
  const columns: Column[] = []

  for (const columnData of columnsData) {
    columns.push(new Column(columnData.name, columnData.has_estimative))
  }

  res.json(columns)
})

app.get('/boards/:idBoard/columns/:idColumn/cards', async (req, res) => {
  const cardsData = await connection.query('select title, estimative from kanban.card where id_column = $1', [req.params.idColumn])
  const cards: Card[] = []

  for (const cardData of cardsData) {
    cards.push(new Card(cardData.title, cardData.estimative))
  }

  res.json(cards)
})

app.listen(PORT)
