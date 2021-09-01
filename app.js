const express = require('express')
const app = express()
const port = 3000;


app.get('/welcome', (req, res) => {
  res.json("welcome to my api first application");
});

app.get('/welcome/:name', async function(req, res) {
    
    // Retrieve the tag from our URL path

    var name = req.params.name;

    res.json(`hey ${name}, thanks for calling aparameterized route in my api first application`);
    });


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})