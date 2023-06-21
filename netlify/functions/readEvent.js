// netlify/functions/readEvent.js
const { connectToDatabase } = require("../utils/db"); // set this environment variable on Netlify

exports.handler = async () => {
  try {
    const collection = await connectToDatabase();
    const results = await collection.find({}).limit(10).toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
