const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
}); //route handler

const PORT = process.env.PORT || 5000;
app.listen(PORT, "127.0.0.1", () => {
  console.log('Example app listening on port 8000!')
});