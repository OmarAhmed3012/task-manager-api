const mongoose = require('mongoose')
const {MONGODB_URL} = require('../../config/constrains')

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
