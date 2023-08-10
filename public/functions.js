const fs = require('fs');

const keysFile = './private/keys.json';
const keysData = fs.readFileSync(keysFile, 'utf8');
const keys = JSON.parse(keysData);
const apiKeys = keys.apiKeys;

const casesFile = './private/cases.json';
const casesData = fs.readFileSync(casesFile, 'utf8');
const get_cases = JSON.parse(casesData);
const cases = get_cases.cases

function casesZ() {
    return cases;
}

function auth(rawKey) {
    if(apiKeys.includes(rawKey)) {
        return true;
    } else {
        return false;
    }
}

function notAuthenticatedMsg(res) {
    return res.status(404).send({
        error: "Not Authenticated!"
    });
}

function invalidAPIKeyMsg(res) {
    return res.status(404).send({
        error: "Invalid API Key!"
    })
}

module.exports = {
    auth,
    notAuthenticatedMsg,
    invalidAPIKeyMsg,
    casesZ
};