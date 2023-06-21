const { MongoClient } = require("mongodb");
async function connectToDatabase() {
  try {
    client = new MongoClient(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
    });
    const connection = await client.connect();
    const collection = connection.db("databaseName").collection("event"); // replace "databaseName" with your actual database name
    return collection;
  } catch (err) {
    console.log("Error connecting to database" + err.message);
  }
}
module.exports = { connectToDatabase };
