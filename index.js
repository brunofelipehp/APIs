const express = require('express');

const app = express();

app.listen('3000')

//middleware
app.use(express.json())

app.route('/').post((request, response) => {
    const {nome, cidade} = request.body
    response.send(`Meu nome é ${nome} e minha cidade é ${cidade}`)
})