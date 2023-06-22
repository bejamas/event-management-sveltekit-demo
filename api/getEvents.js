
// api/getBlogs.js
const { MongoClient } = require("mongodb");

module.exports = async (req, res) => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const collection = client.db("databaseName").collection("event");
    const blogs = await collection.find({}).toArray();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json(err.toString());
  }
};