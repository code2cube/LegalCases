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

//random case
app.get('/:key', (req, res) => {
    const rawKey = req.params['key'];
    const cases = functions.casesZ()
    const index = Math.floor(Math.random() * cases.length);
    if(functions.auth(rawKey) === true) {
       res.status(200).send({
            case: cases[index]["case"],
            state: cases[index]["state"],
            category: cases[index]["category"],
            type: cases[index]["type"],
            defendant: cases[index]["defendant"],
            plaintiff: cases[index]["plaintiff"],
            prosecution: case[index]["prosecution"],
            winner: cases[index]["winner"],
            sentence: cases[index]["sentence"],
            settlement: cases[index]["settlement"],
            source: cases[index]["source"],
       })
    } else {
        functions.invalidAPIKeyMsg(res)
    }
});