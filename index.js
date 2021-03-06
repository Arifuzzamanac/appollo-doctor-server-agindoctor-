const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { MongoClient } = require('mongodb');

const port = process.env.PORT || 9000

// middleware
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.n6yc8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {

  try {
    await client.connect();
    console.log('database cnnect');
  }
  finally {
    // await client.close();
  }
}

run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('abar doctor dekha shuru!')
})

app.listen(port, () => {
  console.log(`listining the port : '${port}`)
})