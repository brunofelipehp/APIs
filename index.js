const express = require('express');

const app = express();

app.listen('3000')

app.route('/').get((request, response) => response.send("Hello"))
app.route('/sobre').get((request, response) => response.send("Sobre"))