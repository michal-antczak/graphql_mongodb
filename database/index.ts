import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export const client = new MongoClient(uri);

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });