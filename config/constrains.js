const PORT = 3000
const SENDGRID_API_KEY = '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'
//const MONGODB_URL = 'mongodb://127.0.0.1:27017/task-manager-api'
const MONGODB_URL = 'mongodb+srv://taskapp:omarahmed3012@cluster0-irrbg.mongodb.net/task-manager-api?retryWrites=true'

const JWY_SECRET = 'omarahmed'

module.exports = {
    PORT,
    SENDGRID_API_KEY,
    MONGODB_URL,
    JWY_SECRET
}


/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://taskapp:<password>@cluster0-irrbg.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/
