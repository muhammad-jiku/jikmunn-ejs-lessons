const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.get('/', (req, res) => {
  if (req.method === 'GET') {
    res.status(201).send({
      message: 'Welcome to the ejs chapters',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
