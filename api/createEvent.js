
// api/createBlog.js
const { MongoClient } = require("mongodb");

module.exports = async (req, res) => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const collection = client.db("databaseName").collection("event");
    const newBlog = req.body;
    const result = await collection.insertOne(newBlog);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(err.toString());
  }
};