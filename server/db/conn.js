const { MongoClient } = require("mongodb");

// Get the MongoDB connection string from the environment variables
const Db = process.env.ATLAS_URI;

// Create a new MongoClient instance with connection options
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a variable to hold the connected database object
var _db;

// Export an object with two functions to connect to and get the database
module.exports = {
  // This function connects to the MongoDB server and returns the database object
  connectToServer: function (callback) {
    // Use the MongoClient to connect to the server and return a database object
    client.connect(function (err, db) {
      // Check if the connection was successful
      if (db)
      {
        // If the connection was successful, set the '_db' variable to the connected database
        _db = db.db("tasks");
        console.log("Successfully connected to MongoDB."); 
      }
      // Return any errors to the callback function
      return callback(err);
         });
  },
  
  // This function returns the connected database object
  getDb: function () {
    return _db;
  },
};