const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3030;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`alive on https://localhost:${PORT}`)
)

const keysFile = 'keys.json';
const data = fs.readFileSync(keysFile, 'utf8');
const keys = JSON.parse(data);
const apiKeys = keys.apiKeys;

app.get('/', (req, res) => {
    res.status(404).send({
        error: "Not Authenticated!"
    })
});

app.get('/:key/:msg?', (req, res) => {
    const rawKey = req.params['key'];
    const rawMsg = req.params['msg'];
    if(auth(rawKey) === true) {
        res.status(200).send({
            status: "online",
            message: rawMsg
        })
    } else {
        res.status(404).send({
            error: "Invalid API Key!"
        })
    }
});

function auth(rawKey) {
    if(apiKeys.includes(rawKey)) {
        return true
    } else {
        return false
    }
}