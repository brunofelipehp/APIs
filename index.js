const express = require('express');

const app = express();

app.listen('3000')

//middleware
app.use(express.json())

app.route('/').post((request, response) => response.send(request.body));

let author = "Bruno"

app.route('/').get((request, response) => response.send(author));

app.route('/').put((request, response) => {
    author = request.body.author
    response.send(author)
})

app.route('/:id').delete((request, response) => {
    response.send(request.params.id)
})