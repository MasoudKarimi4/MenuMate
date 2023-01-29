// Server and Api stuff


/*const cohere = require('cohere-ai');
co = cohere.Client(5wlBlVCWE3eU6jZGIjrwiT6GIPW2jgytjtHdfr93)


(async () => {
  cohere.init(process.env.COHERE_API_KEY);

  // Hit the `generate` endpoint on the `large` model
  const generateResponse = await co.generate({
    model: "large",
    prompt: "Once upon a time in a magical land called",
    max_tokens: 50,
    temperature: 1,
  });

  /*
  {
    statusCode: 200,
    body: {
      text: "Eldorado, the anointed monarchs of the ancient world and the ruling family were divided into three kingdoms, each of which was ruled by an individual leader."
    }
  }
  
})(); */



const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

