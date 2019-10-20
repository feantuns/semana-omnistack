const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://felipe:felipe123@oministack-flpkc.mongodb.net/semana09?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// portquiz.net:porta -> saber se está por tras de um proxy (bloqueio)

// req.query = ?nome=joao -> filtros
// req.params = users/:id -> put delete
// req.body = acessar corpo da req (criacao, edicao)

// app.get('/users', (req, res) => {
//   return res.json({ idade: req.query.idade, nome: req.query.nome });
// });

// app.put('/users/:id', (req, res) => {
//   return res.json({ id: req.params.id });
// });

// app.post('/users', (req, res) => {
//   return res.json(req.body);
// });

app.use(express.json());
app.use(routes);

app.listen(3333);
