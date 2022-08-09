import BoardController from './infra/controller/BoardController'
import PgPromiseConnection from './infra/database/pgPromiseConnection'
import ExpressAdapter from './infra/http/ExpressAdapter'

const PORT = 3000

const connection = new PgPromiseConnection()
const http = new ExpressAdapter()

new BoardController(http, connection)

http.listen(PORT)
