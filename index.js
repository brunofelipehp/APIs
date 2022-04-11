const express = require('express');
const { get } = require('express/lib/response');

const app = express();

app.listen('3000')

//middleware
app.use(express.json())

app.route('/').get((req, res) => res.send(req.query))

app.route('/about/user').get((req, res) => res.send(req.query.id))