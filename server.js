const express = require('express');
const CompareNumber = require('./compareNumber');
const AnswerGenerator = require('./answerGenerator');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/answer', function (req, res) {
    const answer = AnswerGenerator.generate();
    res.send(answer);
});

app.post('/compare', function (req, res) {
    const result = CompareNumber.compareNumber(req.body.answer, req.body.input);
    res.send(result);
});

const server = app.listen(3000, () => {
    const address = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', address, port);
});
