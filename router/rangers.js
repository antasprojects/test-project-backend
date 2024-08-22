const { Router } = require('express')

const rangersController = require("../controllers/rangers.js")
const { RowDescriptionMessage } = require('pg-protocol/dist/messages')

rangersRouter = Router()


rangersRouter.get('/', rangersController.index)
// rangersRouter.get('/:name', rangersController.show)
// rangersRouter.post('/', rangersController.create)
// rangersRouter.patch('/:name', rangersController.update)
// rangersRouter.delete('/:name', rangersController.destroy)





module.exports = rangersRouter