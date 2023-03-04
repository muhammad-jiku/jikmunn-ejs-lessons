const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set('view engine', 'ejs');

let favPlayers = [];

app.get('/', (req, res) => {
  res.render('index', {
    players: favPlayers,
  });
});

app.get('/about', (req, res) => {
  res.render('about', {});
});

app.post('/', (req, res) => {
  const { favPlayer } = req.body;
  favPlayers.push(favPlayer);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
