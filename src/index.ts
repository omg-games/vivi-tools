import { MongoClient } from 'mongodb';
// import fetch from 'node-fetch';

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('vivi');
    const movies = database.collection('words');
    // TODO: do stuff
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.error);