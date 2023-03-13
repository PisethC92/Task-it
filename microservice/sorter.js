import express from 'express';
import cors from "cors";

const PORT = 5001;
const app = express();

// Use CORS middleware to allow cross-origin resource sharing
app.use(cors());

// Use JSON middleware to parse incoming JSON data
app.use(express.json());

// Function to compare titles of two objects for sorting
function compareTitles(a, b) {
    if ( a.title < b.title ){
        return -1;
      }
      if ( a.title > b.title ){
        return 1;
      }
      return 0;
}

// POST endpoint to sort records based on title
app.post ('/sort', (req,res) => {
    let sorted = req.body.sort(compareTitles);
    res.send(sorted)
});

// Start the server and listen on the designated port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});