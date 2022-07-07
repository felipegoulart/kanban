import Board from './models/Board'

const board = new Board('Tarefas da Sprint', 'Tarefas da Sprint 10')

board.addColumn('TODO')
board.addColumn('Doing')
board.addColumn('Done')

console.log(board.columns)
