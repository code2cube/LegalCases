const functions = require('./public/functions');
const express = require('express');
const app = express();
const PORT = 3030;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`alive on https://localhost:${PORT}`)
)

app.get('/', (req, res) => {
    functions.notAuthenticatedMsg(res)
});

app.get('/:key/:msg?', (req, res) => {
    const rawKey = req.params['key'];
    const rawMsg = req.params['msg'];
    if(functions.auth(rawKey) === true) {
        res.status(200).send({
            status: "online",
            message: rawMsg
        })
    } else {
        functions.invalidAPIKeyMsg(res)
    }
});