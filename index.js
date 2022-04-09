const express = require('express');

const app = express();

app.listen('3000')

//middleware
app.use(express.json())

app.route('/').post((request, response) => response.send(request.body));