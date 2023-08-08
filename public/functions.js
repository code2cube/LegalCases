const fs = require('fs');

const keysFile = './private/keys.json';
const data = fs.readFileSync(keysFile, 'utf8');
const keys = JSON.parse(data);
const apiKeys = keys.apiKeys;

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
    invalidAPIKeyMsg
};