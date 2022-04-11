const express = require('express');
const { get } = require('express/lib/response');

const app = express();

app.listen('3000')

//middleware
app.use(express.json())

app.route('/').get((req, res) => res.send("oi") )

app.route('/:variavel').get((req, res) => res.send(req.params.variavel))

app.route('/identidade/:nome').get((req, res) => res.send(req.params.nome))