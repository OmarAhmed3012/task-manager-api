const express = require('express')
require('./db/mongoose')
//const {PORT} = require('../config/constrains')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
//dfsdfadfa

app.listen(port, () => {
    console.log('server is up on port ' + process.env.PORT)
})

