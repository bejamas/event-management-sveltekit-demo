const { connectToDatabase } = require("../utils/db");
const uri = process.env.MONGODB_URI;  // set this environment variable on Netlify

exports.handler = async (event, context) => {
  const newEvent = JSON.parse(event.body);
  const collection = await connectToDatabase(uri);
  const result = await collection.insertOne(newEvent);
  return {
    statusCode: 200,
    body: JSON.stringify(result),  // the inserted document
  };
};
